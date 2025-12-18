const path = require('path');
const { PrismaClient } = require(path.resolve(__dirname, '../../generated/prisma'));
const prisma = new PrismaClient();

module.exports = {
  //Lista todos os parceiros
  async listar(req, res) {
    try {
      const parceiros = await prisma.parceiro.findMany();
      return res.json(parceiros);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao buscar parceiros" });
    }
  },

  //Cria um novo parceiro
  async criar(req, res) {
    try {
      const { nome_razao_social, cpf_cnpj, email_contato, dados_bancarios_pix } = req.body;
      const novoParceiro = await prisma.parceiro.create({
        data: { nome_razao_social, cpf_cnpj, email_contato, dados_bancarios_pix }
      });
      return res.status(201).json(novoParceiro);
    } catch (error) {
      return res.status(400).json({ erro: "Erro ao cadastrar parceiro. CPF/CNPJ deve ser único." });
    }
  },

  //Permite editar um parceiro existente
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const parceiroAtualizado = await prisma.parceiro.update({
        where: { id: Number(id) },
        data: req.body
      });
      return res.json(parceiroAtualizado);
    } catch (error) {
      return res.status(404).json({ erro: "Parceiro não encontrado ou erro na atualização." });
    }
  },

  //Remove um parceiro
  async deletar(req, res) {
    try {
      const { id } = req.params;
      await prisma.parceiro.delete({
        where: { id: Number(id) }
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ erro: "Erro ao remover parceiro." });
    }
  }
};
