const { MercadoPagoConfig, Payment } = require('mercadopago');
const client = new MercadoPagoConfig({ 
    accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN 
});

module.exports = {
  async gerarPix(req, res) {
    try {
      const { valor, descricao, email_pagador, ids_faturas } = req.body;

      if (!valor || Number(valor) <= 0) {
        return res.status(400).json({ erro: "Valor inválido para pagamento." });
      }

      const payment = new Payment(client);

      const body = {
        transaction_amount: Number(valor),
        description: descricao || 'Pagamento de Faturas - GETRA',
        payment_method_id: 'pix',
        payer: {
          email: 'email@teste.com', //alterar para quando for usar em produção com o email_pagador
          first_name: 'Cliente',
          last_name: 'Getra'
        },
        metadata: {
            faturas_ids: ids_faturas ? ids_faturas.join(',') : ''
        }
      };

      
      const result = await payment.create({ body });
      const data = result; 

      return res.json({
        id_transacao: data.id,
        status: data.status,
        qr_code: data.point_of_interaction.transaction_data.qr_code,
        qr_code_base64: data.point_of_interaction.transaction_data.qr_code_base64,
        valor: data.transaction_amount
      });

    } catch (error) {
      console.error(" Erro MP:", error);
      // O erro da v2 costuma vir em error.cause ou error.message
      return res.status(500).json({ 
          erro: "Erro ao gerar PIX no Mercado Pago",
          detalhe: error.message 
      });
    }
  }
};