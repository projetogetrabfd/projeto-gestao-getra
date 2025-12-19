const path = require('path');
const { PrismaClient } = require(path.resolve(__dirname, '../../generated/prisma'));
const prisma = new PrismaClient();
module.exports = {
  //Lista todos os clientes
  async listar(req, res) {
    try {
      const clientes = await prisma.cliente.findMany();
      return res.json(clientes);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao buscar clientes" });
    }
  },

  //Cria um novo cliente
  async criar(req, res) {
    try {
      const { nome_razao_social, cpf_cnpj, email, telefone, endereco_completo } = req.body;
      const novoCliente = await prisma.cliente.create({
        data: { nome_razao_social, cpf_cnpj, email, telefone, endereco_completo }
      });
      return res.status(201).json(novoCliente);
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao criar cliente. Verifique os dados." });
    }
  },

  //Atualizar dados de um cliente existente
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const clienteAtualizado = await prisma.cliente.update({
        where: { id: Number(id) }, 
        data: req.body
      });
      return res.json(clienteAtualizado);
    } catch (error) {
      return res.status(404).json({ erro: "Cliente não encontrado ou erro na atualização." });
    }
  },

  //Remove um cliente
  async deletar(req, res) {
    try {
      const { id } = req.params;
      await prisma.cliente.delete({
        where: { id: Number(id) }
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ erro: "Erro ao remover cliente." });
    }
  }
};
