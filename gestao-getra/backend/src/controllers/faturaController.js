const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  // Listar todas (Incluindo dados do Cliente)
  async listar(req, res) {
    try {
      const faturas = await prisma.fatura.findMany({
        include: { cliente: true }, // Traz o nome do cliente junto
        orderBy: { data_vencimento: 'asc' } // Ordena por vencimento
      });
      return res.json(faturas);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao buscar faturas" });
    }
  },

  // Criar
  async criar(req, res) {
    try {
      const { id_cliente, valor_total, data_vencimento, status } = req.body;
      const novaFatura = await prisma.fatura.create({
        data: {
          id_cliente: Number(id_cliente),
          valor_total: parseFloat(valor_total),
          data_vencimento: new Date(data_vencimento),
          status: status || 'PENDENTE'
        }
      });
      return res.status(201).json(novaFatura);
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao criar fatura." });
    }
  },

  // Atualizar (Mudar Status ou Valor)
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { status, valor_total, data_vencimento } = req.body;
      
      const faturaAtualizada = await prisma.fatura.update({
        where: { id: Number(id) },
        data: {
          status,
          // Só atualiza se o valor vier no corpo da requisição
          ...(valor_total && { valor_total: parseFloat(valor_total) }),
          ...(data_vencimento && { data_vencimento: new Date(data_vencimento) })
        }
      });
      return res.json(faturaAtualizada);
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao atualizar fatura." });
    }
  },

  // Deletar
  async deletar(req, res) {
    try {
      const { id } = req.params;
      await prisma.fatura.delete({ where: { id: Number(id) } });
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao excluir fatura." });
    }
  }
};