const path = require('path');
const { PrismaClient } = require(path.resolve(__dirname, '../../generated/prisma'));
const prisma = new PrismaClient();

module.exports = {
  //Lista todas as recorrências com cliente e serviço
  async listar(req, res) {
    try {
      const recorrencias = await prisma.recorrencia.findMany({
        include: { cliente: true, servico: true }
      });
      return res.json(recorrencias);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao buscar recorrências" });
    }
  },

  //Cria uma nova recorrência
  async criar(req, res) {
    try {
      const { id_cliente, id_servico, valor_cobrado, periodicidade, dia_vencimento, status } = req.body;
      const nova = await prisma.recorrencia.create({
        data: {
          id_cliente: Number(id_cliente),
          id_servico: Number(id_servico),
          valor_cobrado: parseFloat(valor_cobrado),
          periodicidade,
          dia_vencimento: Number(dia_vencimento),
          status
        }
      });
      return res.status(201).json(nova);
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao criar recorrência." });
    }
  },

  //Permite editar recorrência existente
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const recorrenciaAtualizada = await prisma.recorrencia.update({
        where: { id: Number(id) },
        data: req.body
      });
      return res.json(recorrenciaAtualizada);
    } catch (error) {
      return res.status(404).json({ erro: "Recorrência não encontrada ou erro na atualização." });
    }
  },

  //Remove recorrência
  async deletar(req, res) {
    try {
      const { id } = req.params;
      await prisma.recorrencia.delete({
        where: { id: Number(id) }
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ erro: "Erro ao remover recorrência." });
    }
  }
};
