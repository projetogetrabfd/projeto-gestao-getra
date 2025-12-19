// ARQUIVO: backend/src/controllers/authController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.register = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    // Verificação de segurança: Se não tiver senha, para aqui
    if (!senha) return res.status(400).json({ error: "Senha é obrigatória" });

    const user = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha_hash: senha, // Salva a senha no campo correto
        ativo: true,       // Usuário nasce ativo
        perfil: {
          connect: { id: 1 } // <--- FORMA CORRETA DE VINCULAR O PERFIL 1
        }
      }
    });

    res.json({ message: "Usuário criado com sucesso!", user });
    
  } catch (error) {
    console.log("ERRO NO CADASTRO:", error);
    // Se o erro for de email duplicado (P2002)
    if (error.code === 'P2002') {
      return res.status(400).json({ error: "Este email já está cadastrado." });
    }
    res.status(500).json({ error: "Erro interno ao cadastrar." });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // 1. Busca o usuário pelo email
    const user = await prisma.usuario.findUnique({
      where: { email }
    });

    // 2. Se não achar o usuário OU a senha não bater (comparando com senha_hash)
    if (!user || user.senha_hash !== senha) {
      return res.status(401).json({ error: "Email ou senha incorretos" });
    }

    // 3. Verifica se está ativo
    if (!user.ativo) {
      return res.status(401).json({ error: "Usuário inativo." });
    }

    // 4. Sucesso! Retorna os dados (removendo a senha por segurança)
    const { senha_hash, ...userSemSenha } = user;
    
    res.json({ 
      message: "Login realizado com sucesso", 
      user: userSemSenha 
    });

  } catch (error) {
    console.log("ERRO NO LOGIN:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};