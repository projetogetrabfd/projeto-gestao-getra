import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Sidebar } from '../Components/Sidebar';

// Componentes Gráficos
import { Card } from './components/Card';
import { LineChart } from './components/LineChart';
import { BarChart } from './components/BarChart';
import { DoughnutChart } from './components/DoughnutChart';

import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, 
  BarElement, ArcElement, Title, Tooltip, Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

export function Faturas() {
  const [data, setData] = useState(null);
  const [listaFaturas, setListaFaturas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estados do Formulário
  const [modalAberto, setModalAberto] = useState(false);
  
  // Listas para os Selects
  const [listaClientes, setListaClientes] = useState([]);
  const [listaServicos, setListaServicos] = useState([]); // <--- NOVA LISTA
  
  // Campos do Formulário
  const [clienteSelecionado, setClienteSelecionado] = useState('');
  const [servicoSelecionado, setServicoSelecionado] = useState(''); // <--- NOVO CAMPO
  const [valor, setValor] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const [status, setStatus] = useState('PENDENTE');

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
  const carregarTudo = async () => {
    try {
      setLoading(true);
      
      // Busca Clientes, Faturas e SERVIÇOS simultaneamente
      const [resClientes, resFaturas, resServicos] = await Promise.all([
        axios.get('http://localhost:3000/clientes'),
        axios.get('http://localhost:3000/faturas'),
        axios.get('http://localhost:3000/servicos') // <--- Busca Serviços
      ]);

      setListaClientes(resClientes.data);
      setListaServicos(resServicos.data);
      setListaFaturas(resFaturas.data);
      
      const dadosProcessados = processarDadosReais(resFaturas.data);
      setData(dadosProcessados);

    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { carregarTudo(); }, []);

  // --- A MÁGICA: Preencher valor ao escolher serviço ---
  function handleServicoChange(e) {
    const idServico = e.target.value;
    setServicoSelecionado(idServico);

    // Procura o serviço na lista para pegar o preço
    const servicoEncontrado = listaServicos.find(s => s.id === Number(idServico));
    
    if (servicoEncontrado) {
      setValor(servicoEncontrado.valor_padrao); // Preenche o campo valor sozinho!
    } else {
      setValor(''); // Se desmarcar, limpa (opcional)
    }
  }

  // --- Ações ---
  async function handleSalvarFatura(e) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/faturas', {
        id_cliente: clienteSelecionado,
        valor_total: valor,
        data_vencimento: dataVencimento,
        status: status
      });
      alert("Fatura lançada!");
      setModalAberto(false);
      // Limpar formulário
      setValor(''); setDataVencimento(''); setStatus('PENDENTE'); 
      setClienteSelecionado(''); setServicoSelecionado('');
      
      carregarTudo();
    } catch (error) {
      alert("Erro ao lançar fatura.");
    }
  }

  async function handleDeletar(id) {
    if (window.confirm("Tem certeza que deseja apagar essa fatura?")) {
      try {
        await axios.delete(`http://localhost:3000/faturas/${id}`);
        carregarTudo();
      } catch (error) {
        alert("Erro ao deletar.");
      }
    }
  }

  async function mudarStatus(id, novoStatus) {
    try {
      await axios.put(`http://localhost:3000/faturas/${id}`, { status: novoStatus });
      carregarTudo();
    } catch (error) {
      alert("Erro ao atualizar status.");
    }
  }

  const formatMoney = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('pt-BR', {timeZone: 'UTC'});

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="content-area">
        <header className="dashboard-header-simple">
          <h2>Gestão Financeira</h2>
          <button className="btn-primary" style={{ width: 'auto', padding: '10px 20px' }} onClick={() => setModalAberto(true)}>
            + Nova Fatura
          </button>
        </header>

        <main className="dashboard-main">
          {loading || !data ? (
            <p>Carregando...</p>
          ) : (
            <>
              {/* ÁREA DE GRÁFICOS */}
              <div className="charts-grid">
                <Card title="Situação (Valores)"><BarChart data={data.resumoMensal} /></Card>
                <Card title="Distribuição"><DoughnutChart data={data.distribuicaoCategorias} /></Card>
                <Card title="Anual" className="card-full-width"><LineChart data={data.historicoAnual} /></Card>
              </div>

              {/* ÁREA DA TABELA */}
              <h3 className="section-title" style={{ marginTop: '40px' }}>Histórico de Lançamentos</h3>
              
              {listaFaturas.length === 0 ? <p>Nenhuma fatura registrada.</p> : (
                <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                      <tr>
                        <th style={{ padding: '15px', textAlign: 'left', color: '#64748b' }}>Cliente</th>
                        <th style={{ padding: '15px', textAlign: 'left', color: '#64748b' }}>Vencimento</th>
                        <th style={{ padding: '15px', textAlign: 'left', color: '#64748b' }}>Valor</th>
                        <th style={{ padding: '15px', textAlign: 'center', color: '#64748b' }}>Status</th>
                        <th style={{ padding: '15px', textAlign: 'right', color: '#64748b' }}>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listaFaturas.map(fatura => (
                        <tr key={fatura.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '15px' }}>
                            <strong>{fatura.cliente?.nome_razao_social || 'Desconhecido'}</strong>
                          </td>
                          <td style={{ padding: '15px' }}>{formatDate(fatura.data_vencimento)}</td>
                          <td style={{ padding: '15px', fontWeight: 'bold' }}>{formatMoney(fatura.valor_total)}</td>
                          <td style={{ padding: '15px', textAlign: 'center' }}>
                            <span style={{
                              padding: '5px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold',
                              background: fatura.status === 'PAGA' ? '#dcfce7' : fatura.status === 'VENCIDA' ? '#fee2e2' : '#fef9c3',
                              color: fatura.status === 'PAGA' ? '#166534' : fatura.status === 'VENCIDA' ? '#991b1b' : '#854d0e'
                            }}>
                              {fatura.status}
                            </span>
                          </td>
                          <td style={{ padding: '15px', textAlign: 'right' }}>
                            <button className="btn-delete" onClick={() => handleDeletar(fatura.id)} style={{ marginRight: '10px' }}>Excluir</button>
                            {fatura.status !== 'PAGA' && (
                              <button 
                                style={{ background: '#10b981', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.8rem' }}
                                onClick={() => mudarStatus(fatura.id, 'PAGA')}
                              >
                                ✓ Pagar
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      {/* --- MODAL --- */}
      {modalAberto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Nova Fatura</h3>
              <button className="btn-close" onClick={() => setModalAberto(false)}>×</button>
            </div>
            <form onSubmit={handleSalvarFatura}>
              <div className="form-group">
                <label>Cliente</label>
                <select style={{ padding: '10px' }} value={clienteSelecionado} onChange={e => setClienteSelecionado(e.target.value)} required>
                  <option value="">Selecione...</option>
                  {listaClientes.map(c => <option key={c.id} value={c.id}>{c.nome_razao_social}</option>)}
                </select>

                {/* NOVO CAMPO DE SERVIÇO */}
                <div style={{ margin: '10px 0', borderTop: '1px solid #eee', paddingTop: '10px' }}>
                  <label style={{ color: '#2563eb' }}>Preencher valor com Serviço (Opcional):</label>
                  <select style={{ padding: '10px' }} value={servicoSelecionado} onChange={handleServicoChange}>
                    <option value="">Selecione para preencher valor...</option>
                    {listaServicos.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.nome} - R$ {s.valor_padrao}
                      </option>
                    ))}
                  </select>
                </div>

                <label>Valor Total (R$)</label>
                <input type="number" step="0.01" value={valor} onChange={e => setValor(e.target.value)} required />
                
                <label>Vencimento</label>
                <input type="date" value={dataVencimento} onChange={e => setDataVencimento(e.target.value)} required />
                
                <label>Status</label>
                <select style={{ padding: '10px' }} value={status} onChange={e => setStatus(e.target.value)}>
                  <option value="PENDENTE">Pendente</option>
                  <option value="PAGA">Paga</option>
                  <option value="VENCIDA">Vencida</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setModalAberto(false)}>Cancelar</button>
                <button type="submit" className="btn-primary">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}