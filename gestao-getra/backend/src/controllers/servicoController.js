const path = require('path');
const { PrismaClient } = require(path.resolve(__dirname, '../../generated/prisma'));
const prisma = new PrismaClient();

module.exports = {
  //Lista todos os serviços
  async listar(req, res) {
    try {
      const servicos = await prisma.servico.findMany();
      return res.json(servicos);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao buscar serviços" });
    }
  },

  //Cria um novo serviço
  async criar(req, res) {
    try {
      const { nome, descricao, valor_padrao } = req.body;
      const novo = await prisma.servico.create({
        data: { 
          nome, 
          descricao, 
          valor_padrao: parseFloat(valor_padrao) 
        }
      });
      return res.status(201).json(novo);
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao criar serviço." });
    }
  },

  //Permite editar um serviço existente
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const servicoAtualizado = await prisma.servico.update({
        where: { id: Number(id) },
        data: req.body
      });
      return res.json(servicoAtualizado);
    } catch (error) {
      return res.status(404).json({ erro: "Serviço não encontrado ou erro na atualização." });
    }
  },

  //Remove um serviço
  async deletar(req, res) {
    try {
      const { id } = req.params;
      await prisma.servico.delete({
        where: { id: Number(id) }
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ erro: "Erro ao remover serviço." });
    }
  }
};
