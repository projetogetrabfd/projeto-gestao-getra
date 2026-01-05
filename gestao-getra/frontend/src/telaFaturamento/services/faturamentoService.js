// Simulação de delay para parecer uma requisição real
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Serviço responsável por buscar os dados de faturamento.
 * Futuramente, esta função fará uma chamada GET para a API.
 * Exemplo: axios.get('/api/faturamento')
 */
export const getFaturamentoData = async () => {
  await delay(800); // Simula latência de rede (ex: tempo de resposta do servidor)

  // Retorna dados mockados (falsos) para o frontend
  // Quando o backend estiver pronto, a estrutura JSON deve ser similar a esta
  return {
    // Dados para o Gráfico de Linha (Faturamento vs Despesas)
    historicoAnual: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      faturamento: [12000, 15000, 13000, 17000, 16000, 18000, 19000, 21000, 20000, 23000, 25000, 28000],
      despesas: [8000, 9000, 8500, 10000, 9500, 11000, 10500, 12000, 11500, 13000, 14000, 15000]
    },
    // Dados para o Gráfico de Barras (Detalhamento Mensal - Semanal)
    resumoMensal: {
      labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      valores: [4500, 6200, 5800, 7100] // Faturamento por semana no mês atual
    },
    // Dados para o Gráfico de Rosca (Por Categoria)
    distribuicaoCategorias: {
      labels: ['Serviços', 'Produtos', 'Consultoria', 'Outros'],
      valores: [45, 30, 15, 10] // Valores representativos
    }
  };
};
