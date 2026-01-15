const ROLES = require("../config/roles");

function mockAuth(req, res, next) {

  req.user = {
    id: 1,
    email: "teste@teste.com",
    role: ROLES.FINANCEIRO, // Mude aqui para testar outros tipos de usuarios
  };

  next();
}

module.exports = mockAuth;
