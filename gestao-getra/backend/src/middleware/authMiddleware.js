// ARQUIVO: backend/src/middleware/authMiddleware.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Middleware de autenticação básica
exports.authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({ error: "Token de autenticação não fornecido" });
    }

    // Como não temos JWT ainda, vamos usar o token como se fosse o ID do usuário
    // Em produção, isso deve ser substituído por verificação JWT real
    const user = await prisma.usuario.findUnique({
      where: { id: parseInt(token) },
      include: { perfil: true }
    });

    if (!user || !user.ativo) {
      return res.status(401).json({ error: "Usuário inválido ou inativo" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Erro na autenticação:", error);
    res.status(500).json({ error: "Erro interno na autenticação" });
  }
};

// Middleware de verificação de role
exports.requireRole = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: "Usuário não autenticado" });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: "Permissão negada" });
    }

    next();
  };
};

// Middleware específico para ADMIN_MASTER
exports.requireAdminMaster = exports.requireRole(['ADMIN_MASTER']);

// Middleware para FINANCEIRO ou ADMIN_MASTER
exports.requireFinanceiroOrAdmin = exports.requireRole(['FINANCEIRO', 'ADMIN_MASTER']);

// Middleware para CLIENTE ou superior (todos os usuários autenticados)
exports.requireClienteOrAbove = exports.requireRole(['CLIENTE', 'FINANCEIRO', 'ADMIN_MASTER']);