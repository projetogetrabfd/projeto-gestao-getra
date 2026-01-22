const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

module.exports = {
  // --- LOGIN ---
  async login(req, res) {
    console.log("--- TENTATIVA DE LOGIN ---");
    try {
      const { email, senha } = req.body;

      // 1. Busca Usuário
      const usuario = await prisma.usuario.findUnique({
        where: { email },
        include: { perfil: true } 
      });

      if (!usuario) {
        return res.status(400).json({ erro: "Usuário não encontrado." });
      }

      // 2. Validações
      if (usuario.ativo === false) return res.status(401).json({ erro: "Usuário desativado." });
      if (!usuario.senha_hash) return res.status(500).json({ erro: "Usuário corrompido." });

      const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);
      if (!senhaValida) return res.status(401).json({ erro: "Senha incorreta." });

      // 3. A MÁGICA: Buscar o ID do Cliente usando o Email
      // Como suas tabelas são separadas, usamos o email para achar quem é esse cliente no sistema financeiro
      const dadosCliente = await prisma.cliente.findFirst({
        where: { email: usuario.email }
      });

      console.log(`Login: Usuario ID ${usuario.id} vinculado ao Cliente ID ${dadosCliente ? dadosCliente.id : 'NENHUM'}`);

      // 4. Retorna tudo
      return res.json({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        role: usuario.role,
        token: "token_simulado",
        perfil: usuario.perfil ? usuario.perfil.nome : null,
        // Mandamos o objeto dadosCliente inteiro para o frontend usar
        dadosCliente: dadosCliente 
      });

    } catch (error) {
      console.error("ERRO NO LOGIN:", error);
      return res.status(500).json({ erro: "Erro interno no servidor." });
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