const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async criarNota(req, res) {
    try {
      // 1. Recebe os dados do Frontend
      const { 
        numero, 
        valor, 
        data_emissao, 
        cnpj_emitente, // Importante: Vamos usar isso para achar o cliente
        link_pdf 
      } = req.body;

      // ---------------------------------------------------------
      // PASSO 1: TRATAMENTO DE DADOS
      // ---------------------------------------------------------

      // Converter "1234" para Inteiro
      const numeroInt = parseInt(numero);
      if (isNaN(numeroInt)) return res.status(400).json({ erro: "Número da nota inválido." });

      // Converter "1500.50" para formato Decimal/Float aceito pelo Prisma
      const valorDecimal = valor; 

      // Converter Data "dd/mm/aaaa" para Objeto Date
      const partesData = data_emissao.split('/'); 
      // Nota: Mês em JS começa em 0. Ex: 01 vira 0 (Janeiro)
      const dataFormatada = new Date(
        parseInt(partesData[2]), 
        parseInt(partesData[1]) - 1, 
        parseInt(partesData[0])
      );

      
      
      const clienteEncontrado = await prisma.cliente.findFirst({
        where: {
           OR: [
             { cpf_cnpj: cnpj_emitente }, // Busca exata (ex: 12.345...)
             { cpf_cnpj: cnpj_emitente.replace(/\D/g, '') } // Busca apenas números
           ]
        }
      });

      if (!clienteEncontrado) {
        return res.status(404).json({ 
          erro: "Cliente não encontrado.", 
          detalhe: `Não existe cliente cadastrado com o CNPJ ${cnpj_emitente}. Cadastre-o antes de lançar a nota.` 
        });
      }

  
      const novaNotaComFatura = await prisma.notaFiscal.create({
        data: {
          // dados da nota fiscal
          numero: numeroInt,
          data_emissao: dataFormatada,
          valor_total: valorDecimal,
          status_api: 'PENDENTE', 
          link_pdf: link_pdf || null,
          
         
          fatura: {
            create: {
              // Conecta ao cliente que achamos lá em cima
              cliente: {
                connect: { id: clienteEncontrado.id }
              },
              valor_total: valorDecimal, // O valor da fatura é o mesmo da nota
              status: 'PENDENTE', // Enum StatusFatura
              data_vencimento: dataFormatada, // Por padrão, vencimento = emissão (Ajuste se tiver regra de +30 dias)
              
              // Outros campos opcionais podem ficar null ou ter defaults
              // id_usuario_criador: req.userId (Se tiver autenticação)
            }
          }
        },
        include: {
          fatura: true // Retorna a fatura criada junto na resposta
        }
      });

      return res.status(201).json({ 
        sucesso: true, 
        mensagem: "Nota e Fatura geradas com sucesso!",
        dados: novaNotaComFatura 
      });

    } catch (error) {
      console.error("Erro ao salvar:", error);
      return res.status(500).json({ 
        erro: "Erro interno do servidor.", 
        detalhe: error.message 
      });
    }
  },

  async listarNotas(req, res) {
    try {
      const notas = await prisma.notaFiscal.findMany({
        orderBy: { id: 'desc' }, 
        include: {
          fatura: true 
        }
      });
      return res.json(notas);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao buscar notas." });
    }
  }
};