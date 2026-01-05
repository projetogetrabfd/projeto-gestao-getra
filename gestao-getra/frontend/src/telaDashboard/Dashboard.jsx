import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Sidebar } from '../Components/Sidebar';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  // Estado para armazenar os totais
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
          axios.get('http://localhost:3000/clientes'),
          axios.get('http://localhost:3000/faturas')
        ]);

        const clientes = resClientes.data;
        const faturas = resFaturas.data;

        // --- CÁLCULOS DOS TOTAIS ---
        
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
        // (Assumindo que o banco já traz ordenado ou ordenamos aqui pela data/ID)
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
    <div className="app-layout">
      <Sidebar />
      <div className="content-area">
        <header className="dashboard-header-simple">
          <h2>Painel de Controle</h2>
          <span style={{color: '#64748b'}}>Bem-vindo, <strong>{usuario?.nome}</strong></span>
        </header>

        <main className="dashboard-main">
          {loading ? (
            <p>Carregando indicadores...</p>
          ) : (
            <>
              {/* --- CARDS DE RESUMO --- */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                
                {/* Card Clientes */}
                <div style={styles.card}>
                  <div style={{...styles.iconBox, background: '#e0f2fe', color: '#0284c7'}}>👥</div>
                  <div>
                    <h4 style={styles.cardTitle}>Clientes Ativos</h4>
                    <p style={styles.cardValue}>{resumo.totalClientes}</p>
                  </div>
                </div>

                {/* Card Receita */}
                <div style={styles.card}>
                  <div style={{...styles.iconBox, background: '#dcfce7', color: '#166534'}}>💰</div>
                  <div>
                    <h4 style={styles.cardTitle}>Receita Total</h4>
                    <p style={{...styles.cardValue, color: '#166534'}}>{formatMoney(resumo.receitaTotal)}</p>
                  </div>
                </div>

                {/* Card Pendente */}
                <div style={styles.card}>
                  <div style={{...styles.iconBox, background: '#fff7ed', color: '#ea580c'}}>⚠️</div>
                  <div>
                    <h4 style={styles.cardTitle}>A Receber ({resumo.qtdPendente})</h4>
                    <p style={{...styles.cardValue, color: '#ea580c'}}>{formatMoney(resumo.totalPendente)}</p>
                  </div>
                </div>
              </div>

              {/* --- ÚLTIMAS MOVIMENTAÇÕES --- */}
              <div style={{ background: 'white', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <h3 style={{ margin: 0, color: '#1e293b' }}>Últimas Faturas Geradas</h3>
                  <button 
                    onClick={() => navigate('/faturas')}
                    style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    Ver todas →
                  </button>
                </div>

                {ultimasFaturas.length === 0 ? (
                  <p style={{ color: '#94a3b8' }}>Nenhuma movimentação recente.</p>
                ) : (
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      {ultimasFaturas.map(fatura => (
                        <tr key={fatura.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '12px 0' }}>
                            <div style={{ fontWeight: 'bold', color: '#334155' }}>{fatura.cliente?.nome_razao_social}</div>
                            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Vence em {formatDate(fatura.data_vencimento)}</div>
                          </td>
                          <td style={{ textAlign: 'right', padding: '12px 0' }}>
                            <div style={{ fontWeight: 'bold', color: '#0f172a' }}>{formatMoney(fatura.valor_total)}</div>
                            <span style={{ 
                              fontSize: '0.75rem', padding: '2px 8px', borderRadius: '10px',
                              background: fatura.status === 'PAGA' ? '#dcfce7' : '#fff7ed',
                              color: fatura.status === 'PAGA' ? '#166534' : '#ea580c'
                            }}>
                              {fatura.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

// Estilos locais simples para os Cards
const styles = {
  card: {
    background: 'white',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    border: '1px solid #e2e8f0'
  },
  iconBox: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem'
  },
  cardTitle: {
    margin: '0 0 5px 0',
    fontSize: '0.9rem',
    color: '#64748b',
    fontWeight: 'normal'
  },
  cardValue: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#0f172a'
  }
};