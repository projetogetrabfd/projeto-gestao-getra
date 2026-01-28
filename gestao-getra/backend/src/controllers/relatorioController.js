const PDFDocument = require('pdfkit');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function gerarRelatorio(req, res) {
  try {
    const totalClientes = await prisma.cliente.count();
    const totalServicos = await prisma.servico.count();
    const totalFaturas = await prisma.fatura.count();

    const somaPago = await prisma.fatura.aggregate({
      _sum: { valor_total: true },
      where: { status: 'PAGA' }
    });

    const somaPendente = await prisma.fatura.aggregate({
      _sum: { valor_total: true },
      where: { status: 'PENDENTE' }
    });

    const somaVencido = await prisma.fatura.aggregate({
      _sum: { valor_total: true },
      where: { status: 'VENCIDA' }
    });

    const totalRecebido = Number(somaPago._sum.valor_total) || 0;
    const totalPendente = Number(somaPendente._sum.valor_total) || 0;
    const totalVencido = Number(somaVencido._sum.valor_total) || 0;
    
    const totalFinanceiro = totalRecebido + totalPendente + totalVencido;

    function percentual(parcial, total) {
      if (total === 0) return '0.00';
      return ((parcial / total) * 100).toFixed(2);
    }
    
    // PDF Setup
    const doc = new PDFDocument({ margin: 50});
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=relatorio-gerencial.pdf');
    doc.pipe(res);

    // Cabeçalho 
    doc
      .roundedRect(45, 30, 510, 48, 10)
      .fillAndStroke('#CEE6FA', '#1779C4')
      .fill('#1779C4')
      .font('Helvetica-Bold')
      .fontSize(22)
      .text('Relatório Gerencial do Sistema', 50, 40, { width: 500, align: 'center' })
      .fill('#000');

    // Data de geração
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
    doc.fontSize(12).text(`Data de geração: ${dataFormatada}`, 50, 90);

    doc.moveTo(50, 110).lineTo(560, 110).stroke('#CCCCCC');

    // RESUMO GERAL
    doc.moveDown(2)
       .fillColor('#1779C4').font('Helvetica-Bold').fontSize(16).text('Resumo Geral');
    doc.moveDown(0.4)
       .fillColor('#000').font('Helvetica').fontSize(12)
       .text(`• Total de clientes:     `, {continued: true}).font('Helvetica-Bold').text(String(totalClientes));
    doc.font('Helvetica').text(`• Total de serviços ativos:     `, {continued: true}).font('Helvetica-Bold').text(String(totalServicos));
    doc.font('Helvetica').text(`• Total de faturas:     `, {continued: true}).font('Helvetica-Bold').text(String(totalFaturas));

    doc.moveDown(0.6).moveTo(50, doc.y).lineTo(560, doc.y).stroke('#CCCCCC');

    // RESUMO FINANCEIRO
    doc.moveDown(1)
       .fillColor('#1779C4').font('Helvetica-Bold').fontSize(16).text('Resumo Financeiro');
    doc.moveDown(0.4).fillColor('#000').font('Helvetica').fontSize(12)
       .text('• Total recebido:    ', {continued: true}).font('Helvetica-Bold').fillColor('#14b46c')
       .text(`R$ ${totalRecebido.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`);
    doc.font('Helvetica').fillColor('#000')
       .text('• Total pendente:    ', {continued: true}).font('Helvetica-Bold').fillColor('#f2c72e')
       .text(`R$ ${totalPendente.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`);
    doc.font('Helvetica').fillColor('#000')
       .text('• Total vencido:     ', {continued: true}).font('Helvetica-Bold').fillColor('#e74c3c')
       .text(`R$ ${totalVencido.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`);

    doc.moveDown(0.6).moveTo(50, doc.y).lineTo(560, doc.y).stroke('#CCCCCC');

    // INDICADORES
    doc.moveDown(1)
       .fillColor('#1779C4').font('Helvetica-Bold').fontSize(16).text('Indicadores');
    doc.moveDown(0.4).font('Helvetica').fillColor('#000').fontSize(12)
       .text('• Percentual recebido:     ', {continued: true}).font('Helvetica-Bold').fillColor('#14b46c')
       .text(`${percentual(totalRecebido, totalFinanceiro)}%`);
    doc.font('Helvetica').fillColor('#000')
       .text('• Percentual pendente:     ', {continued: true}).font('Helvetica-Bold').fillColor('#f2c72e')
       .text(`${percentual(totalPendente, totalFinanceiro)}%`);
    doc.font('Helvetica').fillColor('#000')
       .text('• Percentual vencido:      ', {continued: true}).font('Helvetica-Bold').fillColor('#e74c3c')
       .text(`${percentual(totalVencido, totalFinanceiro)}%`);

    doc.end();
  } catch (error) {
    console.error("Erro ao gerar relatório:", error);
    res.status(500).json({ error: "Erro ao gerar relatório PDF" });
  }
}

module.exports = { gerarRelatorio };