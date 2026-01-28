const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

module.exports = {
  // --- LOGIN ---
  async login(req, res) {
    console.log("--- 🕵️‍♂️ DEBUG LOGIN INICIADO ---");
    
    try {
      // 1. Ver o que chegou
      console.log("1. Body Recebido:", req.body);
      
      const { email, senha } = req.body;
      
      if (!email || !senha) {
          console.log("❌ Erro: Email ou senha faltando no body.");
          return res.status(400).json({ erro: "Email e senha são obrigatórios" });
      }

      // 2. Tentar buscar (Removendo espaços em branco extras com .trim())
      const emailLimpo = email.trim();
      console.log(`2. Buscando no banco pelo email: [${emailLimpo}]`);

      const usuario = await prisma.usuario.findUnique({
        where: { email: emailLimpo },
        include: { perfil: true } 
      });

      // 3. Resultado da busca
      if (!usuario) {
        console.log("❌ RESULTADO: Usuário é NULL (Não encontrado no banco).");
        return res.status(400).json({ erro: "Usuário não encontrado." });
      }

      console.log(`✅ Usuário encontrado: ID ${usuario.id} | Hash existe? ${!!usuario.senha_hash}`);

      // ... resto da validação de senha ...
      if (usuario.ativo === false) return res.status(401).json({ erro: "Usuário desativado." });
      
      const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);
      
      if (!senhaValida) {
          console.log("❌ Senha inválida.");
          return res.status(401).json({ erro: "Senha incorreta." });
      }

      // Busca dados do cliente
      const dadosCliente = await prisma.cliente.findFirst({
        where: { email: usuario.email }
      });

      console.log("🚀 Login Sucesso! Token gerado.");

      return res.json({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        role: usuario.role,
        token: "token_simulado",
        perfil: usuario.perfil ? usuario.perfil.nome : null,
        dadosCliente: dadosCliente 
      });

    } catch (error) {
      console.error("❌ ERRO FATAL NO LOGIN:", error);
      return res.status(500).json({ erro: "Erro interno." });
    }
  },

  // --- CADASTRO ---
  async register(req, res) {
    console.log("--- TENTATIVA DE CADASTRO ---");
    try {
      const { nome, email, senha, cpf_cnpj } = req.body;

      // 1. Verifica duplicidade
      const existe = await prisma.usuario.findUnique({ where: { email } });
      if (existe) {
        return res.status(400).json({ erro: "Email já cadastrado." });
      }

      // 2. Criptografa Senha
      const hashSenha = await bcrypt.hash(senha, 10);

      // 3. Tenta encontrar o perfil 'Cliente' no banco para vincular
      // Isso é necessário porque seu schema obriga id_perfil
      let perfilCliente = await prisma.perfil.findFirst({
        where: { nome: 'Cliente' } // Procura por nome
      });

      // SE NÃO EXISTIR PERFIL, CRIAMOS UM AUTOMÁTICO PARA NÃO TRAVAR
      if (!perfilCliente) {
        console.log("Perfil 'Cliente' não encontrado. Criando um agora...");
        perfilCliente = await prisma.perfil.create({
            data: {
                nome: 'Cliente',
                permissoes: '{"acesso": "basico"}' // JSON string simples
            }
        });
      }

      // 4. Cria Usuário
      const novoUsuario = await prisma.usuario.create({
        data: {
          nome,
          email,
          senha_hash: hashSenha,
          role: 'CLIENTE', // Enum
          ativo: true,
          // AQUI ESTÁ A CORREÇÃO MÁGICA:
          perfil: {
             connect: { id: perfilCliente.id } // Conecta ao perfil que achamos/criamos
          }
        }
      });
      
      console.log("Usuário criado ID:", novoUsuario.id);

      // 5. Cria Tabela Cliente (Vinculada)
      // Note que seu schema Cliente NÃO tem campo direto 'id_usuario' ou relação com Usuario explícita.
      // Vou assumir que você quer apenas salvar os dados do cliente soltos, ou que esqueceu a relação no schema Cliente.
      // Baseado no seu schema atual, Cliente NÃO TEM relação com Usuario.
      // Então vou criar o Cliente solto, apenas com os dados.
      
      if (cpf_cnpj) {
          try {
              await prisma.cliente.create({
                  data: {
                      nome_razao_social: nome,
                      email: email,
                      cpf_cnpj: cpf_cnpj,
                      telefone: '', // Obrigatório no schema mas vazio no form
                      endereco_completo: '' // Obrigatório no schema mas vazio no form
                  }
              });
              console.log("Tabela Cliente criada (sem vínculo direto no schema).");
          } catch (errPerfil) {
              console.error("Erro ao criar tabela Cliente:", errPerfil.message);
              // Não trava o cadastro do usuário
          }
      }

      return res.status(201).json({ 
        sucesso: true, 
        usuario: { id: novoUsuario.id, nome: novoUsuario.nome } 
      });

    } catch (error) {
      console.error("ERRO NO CADASTRO:", error);
      return res.status(500).json({ 
        erro: "Erro ao criar conta.", 
        detalhe: error.message 
      });
    }
  }
};