import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  if (!data) return <p>Carregando gráfico...</p>;

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Faturamento Mensal',
        data: data.valores,
        backgroundColor: '#60a5fa', // Azul
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Esconde legenda pois só tem 1 série
    },
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  return <div style={{ height: '200px', width: '100%' }}><Bar data={chartData} options={options} /></div>;
};

export default BarChart;
