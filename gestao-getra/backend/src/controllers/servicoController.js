const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  // Listar serviços
  async listar(req, res) {
    try {
      const servicos = await prisma.servico.findMany();
      return res.json(servicos);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao buscar serviços" });
    }
  },

  // Criar serviço
  async criar(req, res) {
    try {
      const { nome, descricao, valor_padrao } = req.body;
      const novoServico = await prisma.servico.create({
        data: {
          nome,
          descricao,
          valor_padrao: parseFloat(valor_padrao)
        }
      });
      return res.status(201).json(novoServico);
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao criar serviço." });
    }
  },

  // Atualizar
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao, valor_padrao } = req.body;
      const servicoAtualizado = await prisma.servico.update({
        where: { id: Number(id) },
        data: { nome, descricao, valor_padrao: parseFloat(valor_padrao) }
      });
      return res.json(servicoAtualizado);
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao atualizar serviço." });
    }
  },

  // Deletar
  async deletar(req, res) {
    try {
      const { id } = req.params;
      await prisma.servico.delete({ where: { id: Number(id) } });
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao excluir serviço." });
    }
  }
};