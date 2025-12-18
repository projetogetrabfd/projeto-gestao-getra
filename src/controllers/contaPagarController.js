const path = require('path');
const { PrismaClient } = require(path.resolve(__dirname, '../../generated/prisma'));
const prisma = new PrismaClient();

module.exports = {
  //Lista todas as contas a pagar com parceiro
  async listar(req, res) {
    try {
      const contas = await prisma.contaPagar.findMany({
        include: { parceiro: true }
      });
      return res.json(contas);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao buscar contas a pagar" });
    }
  },

  // Cria uma nova conta a pagar
  async criar(req, res) {
    try {
      const { id_parceiro, id_usuario_lancamento, descricao, valor, data_vencimento, forma_pagamento, status } = req.body;
      const nova = await prisma.contaPagar.create({
        data: {
          id_parceiro: Number(id_parceiro),
          id_usuario_lancamento: Number(id_usuario_lancamento),
          descricao,
          valor: parseFloat(valor),
          data_vencimento: new Date(data_vencimento),
          forma_pagamento,
          status
        }
      });
      return res.status(201).json(nova);
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao lançar conta a pagar." });
    }
  },

  //Editar conta em aberto existente
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const contaAtualizada = await prisma.contaPagar.update({
        where: { id: Number(id) },
        data: req.body
      });
      return res.json(contaAtualizada);
    } catch (error) {
      return res.status(404).json({ erro: "Conta a pagar não encontrada ou erro na atualização." });
    }
  },

  // Remove uma conta em aberto
  async deletar(req, res) {
    try {
      const { id } = req.params;
      await prisma.contaPagar.delete({
        where: { id: Number(id) }
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ erro: "Erro ao remover conta a pagar." });
    }
  }
};
