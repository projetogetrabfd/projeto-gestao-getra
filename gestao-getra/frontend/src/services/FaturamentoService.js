const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getFaturamentoData = async () => {
  await delay(800); 

  return {
    historicoAnual: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      faturamento: [12000, 15000, 13000, 17000, 16000, 18000, 19000, 21000, 20000, 23000, 25000, 28000],
      despesas: [8000, 9000, 8500, 10000, 9500, 11000, 10500, 12000, 11500, 13000, 14000, 15000]
    },
    resumoMensal: {
      labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      valores: [4500, 6200, 5800, 7100]
    },
    distribuicaoCategorias: {
      labels: ['Serviços', 'Produtos', 'Consultoria', 'Outros'],
      valores: [45, 30, 15, 10]
    }
  };
};