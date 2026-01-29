import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'; // Importando o hook novo

export function DashboardDiretoria() {
  const navigate = useNavigate();
  const { user } = useAuth(); // Pegando user do contexto

  const [resumo, setResumo] = useState({
    totalClientes: 0,
    receitaTotal: 0,
    totalPendente: 0,
    qtdPendente: 0
  });

  const [ultimasFaturas, setUltimasFaturas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carregar Dados do Banco
  useEffect(() => {
    async function carregarDados() {
      try {
        // Buscamos Clientes e Faturas ao mesmo tempo
        const [resClientes, resFaturas] = await Promise.all([
          axios.get('http://82.208.21.143:2000/clientes'),
          axios.get('http://82.208.21.143:2000/faturas')
        ]);

        const clientes = resClientes.data;
        const faturas = resFaturas.data;

        // --- CÁLCULOS DOS TOTAIS (Lógica mantida) ---
        
        // 1. Total de Receita (Soma de tudo que está PAGO)
        const receita = faturas
          .filter(f => f.status === 'PAGA')
          .reduce((acc, curr) => acc + parseFloat(curr.valor_total), 0);

        // 2. Total Pendente (Soma de tudo que está PENDENTE ou VENCIDA)
        const pendente = faturas
          .filter(f => f.status === 'PENDENTE' || f.status === 'VENCIDA')
          .reduce((acc, curr) => acc + parseFloat(curr.valor_total), 0);
        
        const qtdPendente = faturas.filter(f => f.status === 'PENDENTE' || f.status === 'VENCIDA').length;

        // 3. Pegar as 5 últimas faturas para exibir na lista
        const ultimas = faturas.slice(-5).reverse(); 

        setResumo({
          totalClientes: clientes.length,
          receitaTotal: receita,
          totalPendente: pendente,
          qtdPendente: qtdPendente
        });

        setUltimasFaturas(ultimas);

      } catch (error) {
        console.error("Erro ao carregar dashboard:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, []);

  const formatMoney = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('pt-BR', {timeZone: 'UTC'});

  return (
    <div className="dashboard-content" style={{ padding: '20px' }}>
        <header className="page-header" style={{ marginBottom: '30px' }}>
          <div>
            <h2 className="page-title" style={{ fontSize: '24px', fontWeight: 'bold' }}>Painel Gerencial</h2>
            <p style={{ color: '#666', marginTop: '0.25rem' }}>
              Visão geral do sistema para <strong>{user?.nome}</strong> ({user?.role})
            </p>
          </div>
        </header>

        {loading ? (
          <p>Carregando indicadores...</p>
        ) : (
          <>
            {/* --- CARDS DE RESUMO --- */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              
              {/* Card Clientes */}
              <div className="card" style={styles.card}>
                <div style={{ ...styles.iconBox, background: '#E0F2FE', color: '#0284C7' }}>
                  👥
                </div>
                <div>
                  <p style={styles.cardLabel}>Clientes Ativos</p>
                  <h4 style={styles.cardValue}>{resumo.totalClientes}</h4>
                </div>
              </div>

              {/* Card Receita */}
              <div className="card" style={styles.card}>
                <div style={{ ...styles.iconBox, background: '#DCFCE7', color: '#166534' }}>
                  💰
                </div>
                <div>
                  <p style={styles.cardLabel}>Receita Total</p>
                  <h4 style={{ ...styles.cardValue, color: '#166534' }}>{formatMoney(resumo.receitaTotal)}</h4>
                </div>
              </div>

              {/* Card Pendente */}
              <div className="card" style={styles.card}>
                <div style={{ ...styles.iconBox, background: '#FFF7ED', color: '#EA580C' }}>
                  ⚠️
                </div>
                <div>
                  <p style={styles.cardLabel}>A Receber ({resumo.qtdPendente})</p>
                  <h4 style={{ ...styles.cardValue, color: '#EA580C' }}>{formatMoney(resumo.totalPendente)}</h4>
                </div>
              </div>
            </div>

            {/* --- ÚLTIMAS MOVIMENTAÇÕES --- */}
            <div className="card" style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#333' }}>Últimas Faturas Geradas (Geral)</h3>
                <button 
                  onClick={() => navigate('/faturas')}
                  style={{ background: 'none', border: 'none', color: '#22c55e', cursor: 'pointer', fontWeight: '600' }}
                >
                  Ver todas →
                </button>
              </div>

              {ultimasFaturas.length === 0 ? (
                <p style={{ color: '#666', textAlign: 'center', padding: '2rem' }}>Nenhuma movimentação recente.</p>
              ) : (
                <div className="table-container">
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ textAlign: 'left', color: '#666' }}>
                        <th style={{ padding: '10px' }}>Cliente</th>
                        <th style={{ padding: '10px' }}>Vencimento</th>
                        <th style={{ padding: '10px' }}>Valor</th>
                        <th style={{ padding: '10px' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ultimasFaturas.map(fatura => (
                        <tr key={fatura.id} style={{ borderBottom: '1px solid #f9f9f9' }}>
                          <td style={{ padding: '10px' }}>
                            <strong>{fatura.cliente?.nome || fatura.cliente?.nome_razao_social || 'Cliente'}</strong>
                          </td>
                          <td style={{ padding: '10px' }}>{formatDate(fatura.data_vencimento)}</td>
                          <td style={{ padding: '10px', fontWeight: '600' }}>{formatMoney(fatura.valor_total)}</td>
                          <td style={{ padding: '10px' }}>
                            <span style={{
                              padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold',
                              backgroundColor: fatura.status === 'PAGA' ? '#dcfce7' : fatura.status === 'VENCIDA' ? '#fee2e2' : '#fef3c7',
                              color: fatura.status === 'PAGA' ? '#166534' : fatura.status === 'VENCIDA' ? '#991b1b' : '#92400e'
                            }}>
                              {fatura.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
    </div>
  );
}

// Estilos CSS-in-JS para facilitar
const styles = {
  card: {
    display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 0,
    background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  iconBox: {
    width: '48px', height: '48px', borderRadius: '12px', 
    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' 
  },
  cardLabel: {
    margin: 0, color: '#666', fontSize: '0.9rem'
  },
  cardValue: {
    margin: '0.25rem 0 0 0', fontSize: '1.5rem', color: '#333'
  }
};