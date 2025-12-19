const path = require('path');
const { PrismaClient } = require(path.resolve(__dirname, '../../generated/prisma'));
const prisma = new PrismaClient();

module.exports = {
  //Lista todos os perfis
  async listar(req, res) {
    try {
      const perfis = await prisma.perfil.findMany();
      return res.json(perfis);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao buscar perfis" });
    }
  },

  //Cria um novo perfil
  async criar(req, res) {
    try {
      const { nome, permissoes } = req.body;
      const novo = await prisma.perfil.create({
        data: { nome, permissoes }
      });
      return res.status(201).json(novo);
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao criar perfil." });
    }
  },

  //Permite editar um perfil existente
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const perfilAtualizado = await prisma.perfil.update({
        where: { id: Number(id) },
        data: req.body
      });
      return res.json(perfilAtualizado);
    } catch (error) {
      return res.status(404).json({ erro: "Perfil não encontrado ou erro na atualização." });
    }
  },

  //Remove um perfil
  async deletar(req, res) {
    try {
      const { id } = req.params;
      await prisma.perfil.delete({
        where: { id: Number(id) }
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ erro: "Erro ao remover perfil." });
    }
  }
};
