const ROLES = require("../config/roles");

function mockAuth(req, res, next) {
  // Para a demonstração, vamos ler a 'role' e o 'id' que o Frontend envia nos headers
  // Se não for enviado nada, ele assume CLIENTE por padrão para segurança
  const userRole = req.headers['x-user-role'] || ROLES.CLIENTE;
  const userId = req.headers['x-user-id'] || 99;

  // Injeta os dados no 'req.user' para que o roleMiddleware possa validar
  req.user = {
    id: parseInt(userId),
    role: userRole
  };

  next();
}

module.exports = mockAuth;