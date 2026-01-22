const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const pdfParse = require('pdf-parse');
const fs = require('fs');

module.exports = {
  // UPLOAD  
  async upload(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ erro: "Nenhum arquivo enviado. Verifique se a pasta 'uploads' existe." });
      }

      const { id_cliente } = req.body;
      if (!id_cliente || id_cliente === 'undefined') {
        return res.status(400).json({ erro: "ID do Cliente inválido ou não enviado." });
      }

      // LER PDF
      console.log("Lendo PDF...");
      const dataBuffer = fs.readFileSync(req.file.path);
      const data = await pdfParse(dataBuffer);
      const texto = data.text;

      // EXTRAIR VALOR
      const regexValor = /(?:Total|Valor|R\$)\s*[:.]?\s*(\d{1,3}(?:\.\d{3})*,\d{2})/i;
      const matchValor = texto.match(regexValor);
      
      let valorFinal = 0.0;
      if (matchValor) {
        valorFinal = parseFloat(matchValor[1].replace(/\./g, '').replace(',', '.'));
      }

      console.log(`Salvando para Cliente ID: ${id_cliente} | Valor: ${valorFinal}`);
      
      // SALVAR NO BANCO (Cria Fatura + Nota Fiscal)
      const novaFatura = await prisma.fatura.create({
        data: {
          id_cliente: parseInt(id_cliente),
          valor_total: valorFinal,
          data_vencimento: new Date(),
          status: 'PENDENTE',
          descricao: 'Nota Fiscal Upload',
          nota_fiscal: {
            create: {
              numero: Math.floor(Math.random() * 100000),
              data_emissao: new Date(),
              valor_total: valorFinal,
              status_api: 'EMITIDA',
              link_pdf: req.file.path
            }
          }
        },
        include: { nota_fiscal: true }
      });

      return res.status(201).json({
        sucesso: true,
        mensagem: "Nota lançada com sucesso!",
        fatura: novaFatura
      });

    } catch (error) {
      console.error("ERRO NO UPLOAD:", error);
      return res.status(500).json({ 
        erro: "Erro interno no processamento.", 
        detalhe: error.message 
      });
    }
  },

  //  LISTAR 
  async listar(req, res) {
    try {
      const notas = await prisma.notaFiscal.findMany({
        include: { fatura: true },
        orderBy: { id: 'desc' }
      });
      return res.json(notas);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao listar notas" });
    }
  },

  //  DELETAR 
  async deletar(req, res) {
    try {
      const { id } = req.params;
      await prisma.notaFiscal.delete({
        where: { id: Number(id) }
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao deletar nota" });
    }
  },
  
  // Função legada caso alguma rota antiga chame 'criarNota'
  async criarNota(req, res) {
      return res.status(400).json({erro: "Use a rota /notas/upload"});
  },
  
  // Função legada caso alguma rota antiga chame 'listarNotas'
  async listarNotas(req, res) {
      // Redireciona para o listar padrão
      const notas = await prisma.notaFiscal.findMany();
      return res.json(notas);
  }
};