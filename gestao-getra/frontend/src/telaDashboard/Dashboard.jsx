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
    <div className="app-container">
      <Sidebar />
      
      <main className="main-content">
        <header className="page-header">
          <div>
            <h2 className="page-title">Painel de Controle</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              Bem-vindo de volta, <strong>{usuario?.nome}</strong>
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
              <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 0 }}>
                <div style={{ 
                  width: '48px', height: '48px', borderRadius: '12px', 
                  background: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' 
                }}>
                  👥
                </div>
                <div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Clientes Ativos</p>
                  <h4 style={{ margin: '0.25rem 0 0 0', fontSize: '1.5rem', color: 'var(--text-primary)' }}>{resumo.totalClientes}</h4>
                </div>
              </div>

              {/* Card Receita */}
              <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 0 }}>
                <div style={{ 
                  width: '48px', height: '48px', borderRadius: '12px', 
                  background: '#DCFCE7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' 
                }}>
                  💰
                </div>
                <div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Receita Total</p>
                  <h4 style={{ margin: '0.25rem 0 0 0', fontSize: '1.5rem', color: '#166534' }}>{formatMoney(resumo.receitaTotal)}</h4>
                </div>
              </div>

              {/* Card Pendente */}
              <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 0 }}>
                <div style={{ 
                  width: '48px', height: '48px', borderRadius: '12px', 
                  background: '#FFF7ED', color: '#EA580C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' 
                }}>
                  ⚠️
                </div>
                <div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>A Receber ({resumo.qtdPendente})</p>
                  <h4 style={{ margin: '0.25rem 0 0 0', fontSize: '1.5rem', color: '#EA580C' }}>{formatMoney(resumo.totalPendente)}</h4>
                </div>
              </div>
            </div>

            {/* --- ÚLTIMAS MOVIMENTAÇÕES --- */}
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>Últimas Faturas Geradas</h3>
                <button 
                  onClick={() => navigate('/faturas')}
                  style={{ background: 'none', border: 'none', color: 'var(--getra-green-dark)', cursor: 'pointer', fontWeight: '600' }}
                >
                  Ver todas →
                </button>
              </div>

              {ultimasFaturas.length === 0 ? (
                <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '2rem' }}>Nenhuma movimentação recente.</p>
              ) : (
                <div className="table-container" style={{ boxShadow: 'none', border: 'none' }}>
                  <table>
                    <thead>
                      <tr>
                        <th>Cliente</th>
                        <th>Vencimento</th>
                        <th>Valor</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ultimasFaturas.map(fatura => (
                        <tr key={fatura.id}>
                          <td>
                            <strong>{fatura.cliente?.nome_razao_social}</strong>
                          </td>
                          <td>{formatDate(fatura.data_vencimento)}</td>
                          <td style={{ fontWeight: '600' }}>{formatMoney(fatura.valor_total)}</td>
                          <td>
                            <span className={`badge ${
                              fatura.status === 'PAGA' ? 'badge-success' : 
                              fatura.status === 'VENCIDA' ? 'badge-danger' : 'badge-warning'
                            }`}>
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
      </main>
    </div>
  );
}
