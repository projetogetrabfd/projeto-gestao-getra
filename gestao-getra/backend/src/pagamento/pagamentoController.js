const { MercadoPagoConfig, Payment } = require('mercadopago');

const client = new MercadoPagoConfig({ accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN });
const payment = new Payment(client);

exports.gerarPix = async (req, res) => {
  try {
    const { valor, descricao, email } = req.body;

    const body = {
      transaction_amount: Number(valor),
      description: descricao || 'Pagamento GETRA',
      payment_method_id: 'pix',
      payer: {
        email: email || 'email@teste.com'
      },
    };

    const response = await payment.create({ body });

    return res.status(200).json({
      id: response.id,
      status: response.status,
      qr_code: response.point_of_interaction.transaction_data.qr_code,
      qr_code_base64: response.point_of_interaction.transaction_data.qr_code_base64,
      ticket_url: response.point_of_interaction.transaction_data.ticket_url
    });

  } catch (error) {
    console.error('Erro ao gerar Pix:', error);
    return res.status(500).json({ error: 'Erro ao gerar QR Code Pix' });
  }
};
