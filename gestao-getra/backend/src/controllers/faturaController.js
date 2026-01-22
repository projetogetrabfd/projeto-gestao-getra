const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  // Listar todas (Incluindo dados do Cliente)
  async listar(req, res) {
    try {
      const faturas = await prisma.fatura.findMany({
        orderBy: { id: 'desc' },
        include: {
          cliente: true, 
          recorrencia: {
            include: {
              servico: true
            }
          }
        }
      });
      return res.json(faturas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: "Erro ao buscar faturas" });
    }
  },

  // Criar
 async criar(req, res) {
    try {
        // Agora recebemos 'descricao' do frontend
        const { id_cliente, valor_total, data_vencimento, status, descricao } = req.body;
        
        const novaFatura = await prisma.fatura.create({
            data: {
                id_cliente: Number(id_cliente),
                valor_total: parseFloat(valor_total),
                data_vencimento: new Date(data_vencimento),
                status: status,
                descricao: descricao || null // Salva a descrição!
            }
        });
        return res.status(201).json(novaFatura);
    } catch (error) {
        console.error(error); // Bom para ver erros no terminal
        return res.status(500).json({erro: "Erro ao criar fatura"});
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
      const idFatura = Number(id);

      // 1. Apagar Transações vinculadas (Se a fatura já foi paga)
      // Se não tiver transação, ele só ignora e passa pro próximo
      await prisma.transacao.deleteMany({
        where: { id_fatura: idFatura } // Verifique se no seu banco é id_fatura ou faturaId
      });

      // 2. Apagar Notas Fiscais vinculadas (O PDF que você upou)
      await prisma.notaFiscal.deleteMany({
        where: { id_fatura: idFatura }
      });

      // 3. AGORA SIM, apaga a Fatura
      await prisma.fatura.delete({
        where: { id: idFatura },
      });

      return res.status(200).json({ mensagem: "Fatura e todos os vínculos excluídos com sucesso." });

    } catch (error) {
      console.error("Erro ao deletar fatura:", error);
      return res.status(500).json({ 
        erro: "Não foi possível excluir.",
        detalhe: error.message 
      });
    }
  }
};