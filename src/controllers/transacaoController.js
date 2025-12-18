const path = require('path');
const { PrismaClient } = require(path.resolve(__dirname, '../../generated/prisma'));
const prisma = new PrismaClient();

module.exports = {
  //Lista todas as transações
  async listar(req, res) {
    try {
      const transacoes = await prisma.transacao.findMany();
      return res.json(transacoes);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao buscar transações" });
    }
  },

  //Cria uma nova transação
  async criar(req, res) {
    try {
      const { id_parceiro, valor, tipo, data_transacao } = req.body;
      const novaTransacao = await prisma.transacao.create({
        data: {
          id_parceiro: Number(id_parceiro),
          valor: parseFloat(valor),
          tipo,
          data_transacao: new Date(data_transacao)
        }
      });
      return res.status(201).json(novaTransacao);
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao criar transação." });
    }
  },

  //Atualiza transação existente
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const transacaoAtualizada = await prisma.transacao.update({
        where: { id: Number(id) },
        data: req.body
      });
      return res.json(transacaoAtualizada);
    } catch (error) {
      return res.status(404).json({ erro: "Transação não encontrada ou erro na atualização." });
    }
  },

  //Remover uma transação
  async deletar(req, res) {
    try {
      const { id } = req.params;
      await prisma.transacao.delete({
        where: { id: Number(id) }
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ erro: "Erro ao remover transação." });
    }
  }
};
