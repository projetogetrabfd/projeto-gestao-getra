const path = require('path');
const { PrismaClient } = require(path.resolve(__dirname, '../../generated/prisma'));
const prisma = new PrismaClient();

module.exports = {
  //Lista todas as notas fiscais
  async listar(req, res) {
    try {
      const notas = await prisma.notaFiscal.findMany({
        include: { fatura: true }
      });
      return res.json(notas);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao buscar notas fiscais" });
    }
  },

  //Cria uma nova nota fiscal
  async criar(req, res) {
    try {
      const { id_fatura, numero, data_emissao, valor_total } = req.body;
      const novaNota = await prisma.notaFiscal.create({
        data: {
          id_fatura: Number(id_fatura),
          numero,
          data_emissao: new Date(data_emissao),
          valor_total: parseFloat(valor_total)
        }
      });
      return res.status(201).json(novaNota);
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao criar nota fiscal." });
    }
  },

  //Atualiza uma nota fiscal existente
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const notaAtualizada = await prisma.notaFiscal.update({
        where: { id: Number(id) },
        data: req.body
      });
      return res.json(notaAtualizada);
    } catch (error) {
      return res.status(404).json({ erro: "Nota fiscal não encontrada ou erro na atualização." });
    }
  },

  //Remove uma nota fiscal
  async deletar(req, res) {
    try {
      const { id } = req.params;
      await prisma.notaFiscal.delete({
        where: { id: Number(id) }
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ erro: "Erro ao remover nota fiscal." });
    }
  }
};
