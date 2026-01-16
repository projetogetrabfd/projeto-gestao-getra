const ROLES = require('../config/roles');

// Simulação de Banco de Dados com um usuário para cada permissão
const USUARIOS_DEMO = [
  { id: 1, nome: "Admin Getra", email: "admin@getra.com.br", senha: "123", role: ROLES.ADMIN },
  { id: 2, nome: "Financeiro Getra", email: "financeiro@getra.com.br", senha: "123", role: ROLES.FINANCEIRO },
  { id: 3, nome: "Cliente Getra", email: "cliente@getra.com.br", senha: "123", role: ROLES.CLIENTE }
];

exports.register = async (req, res) => {
  // Desativado para a demonstração, pois não há banco para salvar novos dados
  res.status(501).json({ error: "Funcionalidade de registro desativada para a demonstração." });
};

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Busca o usuário na lista manual em vez de usar o Prisma
    const user = USUARIOS_DEMO.find(u => u.email === email && u.senha === senha);

    if (!user) {
      return res.status(401).json({ error: "Email ou senha incorretos" });
    }

    // Retorna os dados que o seu componente React espera salvar no localStorage
    // Incluí a 'role' para que o sistema de permissões saiba quem logou
    return res.json({ 
      message: "Login realizado com sucesso", 
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        role: user.role
      } 
    });

  } catch (error) {
    console.log("ERRO NO LOGIN:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};