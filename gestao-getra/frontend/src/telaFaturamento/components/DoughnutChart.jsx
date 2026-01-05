import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ data }) => {
  if (!data) return <p>Carregando gráfico...</p>;

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.valores,
        backgroundColor: [
          '#fbbf24', // Amarelo
          '#34d399', // Verde
          '#818cf8', // Indigo
          '#f472b6', // Rosa
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        position: 'right',
        labels: {
          boxWidth: 15,
          font: { size: 12 }
        }
      },
    },
  };

  return <div style={{ height: '200px', width: '100%' }}><Doughnut data={chartData} options={options} /></div>;
};

export default DoughnutChart;
