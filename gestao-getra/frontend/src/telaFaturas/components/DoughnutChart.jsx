import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutChart = ({ data }) => {
  if (!data) return <p>Carregando...</p>;

  const chartData = {
    labels: data.labels,
    datasets: [{
      data: data.valores,
      backgroundColor: ['#f59e0b', '#10b981', '#6366f1', '#ec4899'],
      borderWidth: 1,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { position: 'right', labels: { boxWidth: 12, font: { size: 11 } } } 
    },
  };

  return <div style={{ height: '100%', width: '100%', minHeight: '200px' }}><Doughnut data={chartData} options={options} /></div>;
};