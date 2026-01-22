import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';

export function DashboardCliente() {
  const { user } = useAuth();
  
  const [faturas, setFaturas] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Totais calculados
  const [resumo, setResumo] = useState({
    pendente: 0,
    vencido: 0,
    totalPago: 0
  });

  // Lista de serviços identificados nas faturas
  const [meusServicos, setMeusServicos] = useState([]);

  useEffect(() => {
    async function carregarDados() {
      if (!user) return;

      try {
        // Busca TODAS as faturas (O ideal seria o backend filtrar, mas faremos aqui por segurança)
        const response = await axios.get('http://localhost:3000/faturas');
        const todasFaturas = response.data;

        // 1. FILTRO: Pegar apenas as faturas DESTE cliente
        const minhasFaturas = todasFaturas.filter(f => f.id_cliente === user.id);

        // 2. CÁLCULOS
        let totalPendente = 0;
        let totalVencido = 0;
        let totalPago = 0;
        const servicosEncontrados = new Set(); // Usamos Set para não repetir nomes

        minhasFaturas.forEach(fat => {
            const valor = parseFloat(fat.valor_total);
            
            if (fat.status === 'PENDENTE') totalPendente += valor;
            if (fat.status === 'VENCIDA') totalVencido += valor;
            if (fat.status === 'PAGA') totalPago += valor;

            // Tenta pegar o nome do serviço (se sua API retornar fatura.servico.nome)
            // Se não tiver serviço vinculado, usa uma descrição genérica
            if (fat.servico?.nome) {
                servicosEncontrados.add(fat.servico.nome);
            }
        });

        setFaturas(minhasFaturas);
        setResumo({
            pendente: totalPendente,
            vencido: totalVencido,
            totalPago: totalPago
        });
        setMeusServicos(Array.from(servicosEncontrados)); // Converte Set para Array

      } catch (error) {
        console.error("Erro ao carregar dashboard do cliente:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, [user]);

  const formatMoney = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('pt-BR', {timeZone: 'UTC'});

  if (loading) return <div style={{padding: 20}}>Carregando suas informações...</div>;

  return (
    <div>
      <header className="page-header">
        <div>
            <h2 className="page-title">Meu Painel</h2>
            <p style={{ color: '#666' }}>Bem-vindo, <strong>{user?.nome}</strong></p>
        </div>
      </header>

      {/* --- CARDS DE RESUMO --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        
        {/* Card Pendente */}
        <div className="card" style={{ borderLeft: '5px solid #f59e0b' }}>
            <p style={{ margin: 0, color: '#666' }}>A Pagar (Aberto)</p>
            <h3 style={{ fontSize: '2rem', margin: '5px 0', color: '#f59e0b' }}>
                {formatMoney(resumo.pendente)}
            </h3>
        </div>

        {/* Card Vencido (Só aparece se tiver dívida) */}
        {resumo.vencido > 0 && (
            <div className="card" style={{ borderLeft: '5px solid #ef4444' }}>
                <p style={{ margin: 0, color: '#666' }}>Vencido</p>
                <h3 style={{ fontSize: '2rem', margin: '5px 0', color: '#ef4444' }}>
                    {formatMoney(resumo.vencido)}
                </h3>
            </div>
        )}

        {/* Card Serviços */}
        <div className="card" style={{ borderLeft: '5px solid #22c55e' }}>
            <p style={{ margin: 0, color: '#666' }}>Serviços Ativos</p>
            <h3 style={{ fontSize: '2rem', margin: '5px 0', color: '#22c55e' }}>
                {meusServicos.length > 0 ? meusServicos.length : '0'}
            </h3>
            <small style={{color: '#999'}}>Contratados</small>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        
        {/* --- TABELA DE FATURAS --- */}
        <div className="card" style={{ gridColumn: 'span 2' }}> 
            <h3 style={{ marginBottom: '15px', color: '#333' }}>Minhas Faturas</h3>
            
            {faturas.length === 0 ? (
                <p style={{ color: '#888' }}>Você não possui faturas registradas.</p>
            ) : (
                <div className="table-container" style={{ boxShadow: 'none', border: 'none' }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Serviço/Descrição</th>
                                <th>Vencimento</th>
                                <th>Valor</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faturas.map(fat => (
                                <tr key={fat.id}>
                                    <td>{fat.servico?.nome || 'Fatura de Serviço'}</td>
                                    <td>{formatDate(fat.data_vencimento)}</td>
                                    <td style={{ fontWeight: 'bold' }}>{formatMoney(fat.valor_total)}</td>
                                    <td>
                                        <span className={`badge ${
                                            fat.status === 'PAGA' ? 'badge-success' : 
                                            fat.status === 'VENCIDA' ? 'badge-danger' : 'badge-warning'
                                        }`}>
                                            {fat.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>

        {/* --- LISTA DE SERVIÇOS CONTRATADOS --- */}
        {meusServicos.length > 0 && (
            <div className="card" style={{ gridColumn: 'span 2' }}>
                <h3 style={{ marginBottom: '15px', color: '#333' }}>Serviços Contratados</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {meusServicos.map((servico, index) => (
                        <li key={index} style={{ 
                            padding: '10px', 
                            borderBottom: '1px solid #eee',
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '10px' 
                        }}>
                            <span style={{ color: '#22c55e' }}>✔</span> {servico}
                        </li>
                    ))}
                </ul>
            </div>
        )}
      </div>
    </div>
  );
}