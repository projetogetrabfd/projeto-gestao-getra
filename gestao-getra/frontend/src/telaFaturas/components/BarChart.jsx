import React from 'react';
import { Bar } from 'react-chartjs-2';

export const BarChart = ({ data }) => {
  if (!data) return <p>Carregando...</p>;

  const chartData = {
    labels: data.labels,
    datasets: [{
      label: 'Faturamento',
      data: data.valores,
      backgroundColor: '#3b82f6', // Azul do seu tema
      borderRadius: 4,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  };

  return <div style={{ height: '100%', width: '100%', minHeight: '200px' }}><Bar data={chartData} options={options} /></div>;
};