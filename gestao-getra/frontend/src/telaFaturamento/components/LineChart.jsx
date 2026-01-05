import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  if (!data) return <p>Carregando gráfico...</p>;

  // Configuração dos dados do gráfico
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Faturamento',
        data: data.faturamento,
        borderColor: '#4ade80', // Verde
        backgroundColor: 'rgba(74, 222, 128, 0.2)',
        tension: 0.4, // Suaviza a linha (curva)
        fill: true,
      },
      {
        label: 'Despesas',
        data: data.despesas,
        borderColor: '#f87171', // Vermelho
        backgroundColor: 'rgba(248, 113, 113, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Opções de visualização
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Formata valores como moeda (R$)
          callback: function(value) {
            return 'R$ ' + value;
          }
        }
      }
    }
  };

  // Wrapper com altura fixa para garantir que o gráfico renderize bem
  return <div style={{ height: '300px', width: '100%' }}><Line data={chartData} options={options} /></div>;
};

export default LineChart;
