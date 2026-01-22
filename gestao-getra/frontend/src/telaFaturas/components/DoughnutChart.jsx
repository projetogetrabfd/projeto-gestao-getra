import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutChart = ({ data }) => {
  if (!data) return <p>Carregando...</p>;

  // Verifica se todos os valores são zero (sem dados)
  const total = data.valores ? data.valores.reduce((acc, curr) => acc + curr, 0) : 0;
  const isVazio = total === 0;

  const chartData = {
    labels: isVazio ? ['Sem Dados'] : data.labels,
    datasets: [{
      data: isVazio ? [1] : data.valores, // [1] para desenhar um círculo completo cinza
      backgroundColor: isVazio 
        ? ['#e5e7eb'] // Cinza claro para indicar vazio
        : ['#f59e0b', '#10b981', '#6366f1', '#ec4899'],
      borderWidth: isVazio ? 0 : 1,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { 
        display: !isVazio, // Oculta a legenda se estiver vazio
        position: 'right', 
        labels: { boxWidth: 12, font: { size: 11 } } 
      },
      tooltip: { enabled: !isVazio } // Desativa tooltip se estiver vazio
    },
    cutout: '60%', // Deixa o gráfico mais fino e elegante
  };

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Doughnut data={chartData} options={options} />
      {isVazio && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          pointerEvents: 'none' // Permite clicar "através" do texto se necessário
        }}>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#9ca3af', fontWeight: '500' }}>Sem Dados</p>
        </div>
      )}
    </div>
  );
};