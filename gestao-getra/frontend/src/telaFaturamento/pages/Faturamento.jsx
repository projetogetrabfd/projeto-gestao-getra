import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import DoughnutChart from '../components/DoughnutChart';
import { getFaturamentoData } from '../services/faturamentoService';
import '../styles/faturamento.css';

// Importação e Registro do Chart.js
// Isso é necessário para que os componentes de gráfico funcionem
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Faturamento = () => {
  // Estado para armazenar os dados dos gráficos
  const [data, setData] = useState(null);
  // Estado de carregamento
  const [loading, setLoading] = useState(true);

  // useEffect: Executado ao carregar a página
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Iniciando busca de dados...");
        // Chama o serviço mockado (simula API)
        const result = await getFaturamentoData();
        setData(result);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Carregando Dashboard Financeiro...</div>;
  }

  return (
    <div className="faturamento-container">
      <header className="faturamento-header">
        <h1>Faturamento e Despesas</h1>
      </header>

      <div className="dashboard-grid">
        {/* Card 1: Gráfico de Barras */}
        <Card title="Resumo Mensal (Semanas)" className="card-medium">
          <BarChart data={data.resumoMensal} />
        </Card>

        {/* Card 2: Gráfico de Rosca */}
        <Card title="Distribuição por Categoria" className="card-medium">
          <DoughnutChart data={data.distribuicaoCategorias} />
        </Card>

        {/* Card 3: Gráfico de Linha (Principal) */}
        <Card title="Histórico Anual: Faturamento vs Despesas" className="card-large">
          <LineChart data={data.historicoAnual} />
        </Card>
      </div>
    </div>
  );
};

export default Faturamento;
