const ROLES = require("../config/roles");

function roleMiddleware(allowedRoles = []) {
  return (req, res, next) => {
    //AVISO
    //Isso depois será trocado por JWT / sessão na versão final
    if (!req.user) {
      return res.status(401).json({ message: "Usuário não autenticado" });
    }

    const { role } = req.user;

    if (!Object.values(ROLES).includes(role)) {
      return res.status(403).json({ message: "Role inválida" });
    }

    if (!allowedRoles.includes(role)) {
      return res.status(403).json({
        message: "Você não tem permissão para acessar este recurso",
      });
    }

    next();
  };
}

module.exports = roleMiddleware;
