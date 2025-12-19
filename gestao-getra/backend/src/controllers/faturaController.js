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

  //Criar uma nova nota fiscal
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
  }
};
