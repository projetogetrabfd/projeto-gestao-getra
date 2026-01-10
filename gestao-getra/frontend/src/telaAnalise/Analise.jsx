import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Sidebar } from '../Components/Sidebar';

// Componentes Gráficos
import { Card } from '../telaFaturas/components/Card';
import { LineChart } from '../telaFaturas/components/LineChart';
import { BarChart } from '../telaFaturas/components/BarChart';
import { DoughnutChart } from '../telaFaturas/components/DoughnutChart';

import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, 
  BarElement, ArcElement, Title, Tooltip, Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

export function Analise() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- Processamento dos Gráficos ---
  function processarDadosReais(faturasDoBanco) {
    const faturamentoMensal = Array(12).fill(0);
    const qtdPorStatus = { PENDENTE: 0, PAGA: 0, VENCIDA: 0 };

    faturasDoBanco.forEach(fatura => {
      const valor = parseFloat(fatura.valor_total);
      const data = new Date(fatura.data_vencimento);
      
      if (!isNaN(data.getTime())) {
        const mes = data.getUTCMonth(); 
        faturamentoMensal[mes] += valor;
      }
      if (qtdPorStatus[fatura.status] !== undefined) {
        qtdPorStatus[fatura.status] += valor;
      }
    });

    return {
      historicoAnual: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        faturamento: faturamentoMensal,
        despesas: Array(12).fill(0)
      },
      resumoMensal: {
        labels: ['Pendente', 'Recebido', 'Vencido'],
        valores: [qtdPorStatus.PENDENTE, qtdPorStatus.PAGA, qtdPorStatus.VENCIDA]
      },
      distribuicaoCategorias: {
        labels: ['Pendente', 'Pago', 'Vencido'],
        valores: [qtdPorStatus.PENDENTE, qtdPorStatus.PAGA, qtdPorStatus.VENCIDA]
      }
    };
  }

  // --- Carregar Dados ---
  const carregarDados = async () => {
    try {
      setLoading(true);
      const resFaturas = await axios.get('http://localhost:3000/faturas');
      const dadosProcessados = processarDadosReais(resFaturas.data);
      setData(dadosProcessados);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { carregarDados(); }, []);

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <header className="page-header">
          <h2 className="page-title">Análise Financeira</h2>
        </header>

        {loading || !data ? (
          <p>Carregando indicadores...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div className="card" style={{ marginBottom: 0 }}><Card title="Situação Mensal"><BarChart data={data.resumoMensal} /></Card></div>
            <div className="card" style={{ marginBottom: 0 }}><Card title="Distribuição"><DoughnutChart data={data.distribuicaoCategorias} /></Card></div>
            <div className="card" style={{ marginBottom: 0, gridColumn: '1 / -1' }}><Card title="Histórico Anual"><LineChart data={data.historicoAnual} /></Card></div>
          </div>
        )}
      </main>
    </div>
  );
}
