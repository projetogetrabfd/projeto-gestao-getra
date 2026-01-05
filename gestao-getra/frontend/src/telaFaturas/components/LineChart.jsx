import React from 'react';
import { Line } from 'react-chartjs-2';

export const LineChart = ({ data }) => {
  if (!data) return <p>Carregando...</p>;

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Receitas',
        data: data.faturamento,
        borderColor: '#10b981', // Verde Sucesso
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Despesas',
        data: data.despesas,
        borderColor: '#ef4444', // Vermelho Perigo
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'top' } },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: (val) => `R$ ${val}` }
      }
    }
  };

  return <div style={{ height: '100%', width: '100%', minHeight: '300px' }}><Line data={chartData} options={options} /></div>;
};