import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function DashboardFinanceiro() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [kpis, setKpis] = useState({
    totalVencido: 0,
    qtdVencidas: 0,
    totalReceber: 0,
    clientesAtivos: 0
  });

  const [faturasCriticas, setFaturasCriticas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDadosOperacionais() {
      try {
        const [resClientes, resFaturas] = await Promise.all([
          axios.get('http://82.208.21.143:2000/clientes'),
          axios.get('http://82.208.21.143:2000/faturas')
        ]);

        const clientes = resClientes.data;
        const faturas = resFaturas.data;

        // 1. Foco no que está VENCIDO (Prioridade máxima de cobrança)
        const vencidas = faturas.filter(f => f.status === 'VENCIDA');
        const totalVencido = vencidas.reduce((acc, curr) => acc + Number(curr.valor_total), 0);

        // 2. Foco no que vai entrar (Fluxo de caixa futuro)
        const aReceber = faturas
            .filter(f => f.status === 'PENDENTE')
            .reduce((acc, curr) => acc + Number(curr.valor_total), 0);

        // 3. Lista de Prioridades (Vencidas + Pendentes próximas)
        // Filtramos para não mostrar as PAGAS (que não exigem trabalho)
        const listaTrabalho = faturas
            .filter(f => f.status !== 'PAGA')
            .sort((a, b) => new Date(a.data_vencimento) - new Date(b.data_vencimento)) // As mais antigas primeiro
            .slice(0, 10); // Top 10 urgentes

        setKpis({
          totalVencido,
          qtdVencidas: vencidas.length,
          totalReceber: aReceber,
          clientesAtivos: clientes.length
        });

        setFaturasCriticas(listaTrabalho);

      } catch (error) {
        console.error("Erro dashboard financeiro:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarDadosOperacionais();
  }, []);

  const formatMoney = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('pt-BR', {timeZone: 'UTC'});

  return (
    <div className="dashboard-financeiro" style={{ padding: '20px' }}>
      
      <header style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
        <h2 style={{ color: '#333', fontSize: '24px' }}>Área Operacional</h2>
        <p style={{ color: '#666' }}>Olá, <strong>{user?.nome}</strong>. Aqui estão as pendências de hoje.</p>
      </header>

      {/* --- 1. AÇÕES RÁPIDAS (Botões de Atalho) --- */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
        <button onClick={() => navigate('/clientes')} style={styles.actionButton}>
          ➕ Novo Cliente
        </button>
        <button onClick={() => navigate('/faturas')} style={styles.actionButton}>
          📄 Gerar Fatura
        </button>
        <button onClick={() => navigate('/analise')} style={styles.actionButton}>
          🔍 Analisar Notas
        </button>
      </div>

      {loading ? <p>Carregando dados...</p> : (
        <>
          {/* --- 2. INDICADORES DE COBRANÇA --- */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            
            {/* O mais importante: VENCIDOS */}
            <div style={{ ...styles.card, borderLeft: '5px solid #ef4444' }}>
              <span style={{ color: '#ef4444', fontWeight: 'bold' }}>⚠️ Em Atraso</span>
              <h3 style={{ fontSize: '28px', margin: '10px 0' }}>{formatMoney(kpis.totalVencido)}</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{kpis.qtdVencidas} faturas vencidas</p>
            </div>

            {/* Fluxo Futuro */}
            <div style={{ ...styles.card, borderLeft: '5px solid #f59e0b' }}>
              <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>⏳ A Receber</span>
              <h3 style={{ fontSize: '28px', margin: '10px 0' }}>{formatMoney(kpis.totalReceber)}</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Previsão de entrada</p>
            </div>

             {/* Carteira */}
             <div style={{ ...styles.card, borderLeft: '5px solid #3b82f6' }}>
              <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>👥 Carteira</span>
              <h3 style={{ fontSize: '28px', margin: '10px 0' }}>{kpis.clientesAtivos}</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Clientes Ativos</p>
            </div>
          </div>

          {/* --- 3. LISTA DE COBRANÇA (Faturas Pendentes/Vencidas) --- */}
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', color: '#444' }}>Fila de Cobrança / Atenção</h3>
            
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f9fafb', textAlign: 'left', color: '#6b7280', fontSize: '14px' }}>
                  <th style={{ padding: '12px' }}>Cliente</th>
                  <th style={{ padding: '12px' }}>Vencimento</th>
                  <th style={{ padding: '12px' }}>Valor</th>
                  <th style={{ padding: '12px' }}>Status</th>
                  <th style={{ padding: '12px' }}>Ação</th>
                </tr>
              </thead>
              <tbody>
                {faturasCriticas.map(fat => (
                  <tr key={fat.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px' }}>{fat.cliente?.nome || fat.cliente?.nome_razao_social}</td>
                    
                    {/* Data colorida se estiver vencida */}
                    <td style={{ padding: '12px', color: fat.status === 'VENCIDA' ? '#ef4444' : '#333', fontWeight: fat.status === 'VENCIDA' ? 'bold' : 'normal' }}>
                        {formatDate(fat.data_vencimento)}
                    </td>
                    
                    <td style={{ padding: '12px' }}>{formatMoney(fat.valor_total)}</td>
                    
                    <td style={{ padding: '12px' }}>
                      <span style={{
                        padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold',
                        background: fat.status === 'VENCIDA' ? '#fee2e2' : '#fef3c7',
                        color: fat.status === 'VENCIDA' ? '#991b1b' : '#92400e'
                      }}>
                        {fat.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px' }}>
                        <button 
                            onClick={() => navigate(`/pagamento?fatura=${fat.id}`)}
                            style={{ border: '1px solid #ddd', background: 'white', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
                        >
                            Ver Detalhes
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {faturasCriticas.length === 0 && <p style={{textAlign:'center', padding: 20}}>Nenhuma pendência crítica. Bom trabalho! 👏</p>}
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  card: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  actionButton: {
    padding: '10px 20px',
    background: '#22c55e',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    transition: 'background 0.2s'
  }
};