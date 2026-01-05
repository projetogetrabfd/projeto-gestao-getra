const pdfParse = require('pdf-parse'); // <--- Nome novo para evitar conflito
const fs = require('fs');

console.log('CAMINHO DO ARQUIVO:', require.resolve('pdf-parse'));

module.exports = {
  // Recebe o arquivo, lê o texto e tenta extrair informações
  async lerNotaFiscal(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ erro: "Nenhum arquivo enviado." });
      }

      // 1. Lê o buffer (o conteúdo) do arquivo PDF
      const dataBuffer = fs.readFileSync(req.file.path);

      console.log('TIPO DE PDFPARSE:', typeof pdfParse);
      console.log('VALOR DE PDFPARSE:', pdfParse);
      
      // 2. Extrai o texto puro
      const data = await pdfParse(dataBuffer);
      const texto = data.text;

      console.log("--- Texto Extraído do PDF ---");
      console.log(texto.substring(0, 200) + "..."); // Mostra o começo no console para debug

      // 3. A MÁGICA: Tentar encontrar padrões (Regex)
      // Nota: Isso depende muito do layout da NF, aqui usamos padrões genéricos

      // Tenta achar valor monetário (ex: 1.250,00 ou 1250,00)
      // Procura algo perto de "Total" ou "Valor"
      const regexValor = /(?:Total|Valor|R\$)\s*[:.]?\s*(\d{1,3}(?:\.\d{3})*,\d{2})/i;
      const matchValor = texto.match(regexValor);

      // Tenta achar uma data (dd/mm/aaaa)
      const regexData = /(\d{2}\/\d{2}\/\d{4})/;
      const matchData = texto.match(regexData);

      // Tenta achar CNPJ (xx.xxx.xxx/xxxx-xx)
      const regexCNPJ = /(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})/;
      const matchCNPJ = texto.match(regexCNPJ);

      // Tenta achar Número da Nota (ex: Nº 1234)
      const regexNumero = /(?:Nº|Numero|Número)(?:\s+da\s+Nota)?\s*[:.]?\s*(\d+)/i;
      const matchNumero = texto.match(regexNumero);

      // 4. Retorna os dados encontrados para o Frontend preencher o formulário
      return res.json({
        sucesso: true,
        dadosExtraidos: {
          valor: matchValor ? matchValor[1].replace('.', '').replace(',', '.') : '', // Converte para formato americano (1250.00)
          data_emissao: matchData ? matchData[1] : '', // Mantém dd/mm/aaaa para tratar no front
          cnpj_emitente: matchCNPJ ? matchCNPJ[1] : '',
          numero_nota: matchNumero ? matchNumero[1] : ''
        },
        textoCompleto: texto // Manda o texto todo caso queira mostrar
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: "Erro ao processar o PDF." });
    } finally {
      // (Opcional) Deletar o arquivo da pasta temporária depois de ler para não encher o servidor
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
    }
  }
};