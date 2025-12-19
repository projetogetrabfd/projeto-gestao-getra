const path = require('path');
const { PrismaClient } = require(path.resolve(__dirname, '../../generated/prisma'));
const prisma = new PrismaClient();

module.exports = {
  //Lista todos os usuários
  async listar(req, res) {
    try {
      const usuarios = await prisma.usuario.findMany({
        include: { perfil: true }
      });
      return res.json(usuarios);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao buscar usuários" });
    }
  },

  //Cria um novo usuário
  async criar(req, res) {
    try {
      const { nome, email, senha_hash, id_perfil } = req.body;
      const novo = await prisma.usuario.create({
        data: { nome, email, senha_hash, id_perfil, ativo: true }
      });
      return res.status(201).json(novo);
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao criar usuário." });
    }
  },

  //Atualiza um usuário existente
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const usuarioAtualizado = await prisma.usuario.update({
        where: { id: Number(id) },
        data: req.body
      });
      return res.json(usuarioAtualizado);
    } catch (error) {
      return res.status(404).json({ erro: "Usuário não encontrado ou erro na atualização." });
    }
  },

  //Remove um usuário
  async deletar(req, res) {
    try {
      const { id } = req.params;
      await prisma.usuario.delete({
        where: { id: Number(id) }
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ erro: "Erro ao remover usuário." });
    }
  }
};
