import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Faturas() {
  const [listaFaturas, setListaFaturas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estados do Formulário
  const [modalAberto, setModalAberto] = useState(false);
  
  // Listas para os Selects
  const [listaClientes, setListaClientes] = useState([]);
  const [listaServicos, setListaServicos] = useState([]);
  
  // Campos do Formulário
  const [clienteSelecionado, setClienteSelecionado] = useState('');
  const [servicoSelecionado, setServicoSelecionado] = useState('');
  const [valor, setValor] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const [status, setStatus] = useState('PENDENTE');
  const [descricao, setDescricao] = useState('');

  // --- Carregar Dados ---
  const carregarTudo = async () => {
    try {
      setLoading(true);
      
      const [resClientes, resFaturas, resServicos] = await Promise.all([
        axios.get('http://localhost:3000/clientes'),
        axios.get('http://localhost:3000/faturas'),
        axios.get('http://localhost:3000/servicos')
      ]);

      setListaClientes(resClientes.data);
      setListaServicos(resServicos.data);
      setListaFaturas(resFaturas.data);
      
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { carregarTudo(); }, []);

  // --- Preencher valor ao escolher serviço ---
  function handleServicoChange(e) {
    const idServico = e.target.value;
    setServicoSelecionado(idServico);

    const servicoEncontrado = listaServicos.find(s => s.id === Number(idServico));
    
    if (servicoEncontrado) {
      setValor(servicoEncontrado.valor_padrao);
      setDescricao(servicoEncontrado.nome);
    } else {
      setValor('');
      setDescricao('');
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
        status: status,
        descricao: descricao
      });
      alert("Fatura lançada!");
      setModalAberto(false);
      setValor(''); setDataVencimento(''); setStatus('PENDENTE'); 
      setClienteSelecionado(''); setServicoSelecionado(''); setDescricao('');
      
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
    <div>
        <header className="page-header">
          <h2 className="page-title">Lançamento de Faturas</h2>
          <button className="btn-primary" style={{ width: 'auto' }} onClick={() => setModalAberto(true)}>
            + Nova Fatura
          </button>
        </header>

        {loading ? (
          <p>Carregando faturas...</p>
        ) : (
          <>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Histórico de Lançamentos</h3>
            
            {listaFaturas.length === 0 ? <p>Nenhuma fatura registrada.</p> : (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Cliente</th>
                      <th>Vencimento</th>
                      <th>Valor</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listaFaturas.map(fatura => (
                      <tr key={fatura.id}>
                        <td>
                          <strong>{fatura.cliente?.nome_razao_social || 'Desconhecido'}</strong>
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
                        <td style={{ textAlign: 'right' }}>
                          <button className="btn-delete" onClick={() => handleDeletar(fatura.id)} style={{ marginRight: '0.5rem' }}>Excluir</button>
                          {fatura.status !== 'PAGA' && (
                            <button 
                              className="btn-primary"
                              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: 'auto', display: 'inline-block' }}
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
                <label className="form-label">Cliente</label>
                <select className="form-control" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} value={clienteSelecionado} onChange={e => setClienteSelecionado(e.target.value)} required>
                  <option value="">Selecione...</option>
                  {listaClientes.map(c => <option key={c.id} value={c.id}>{c.nome_razao_social}</option>)}
                </select>

                <div style={{ margin: '1rem 0', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                  <label className="form-label" style={{ color: 'var(--getra-green-dark)' }}>Preencher com Serviço (Opcional):</label>
                  <select className="form-control" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} value={servicoSelecionado} onChange={handleServicoChange}>
                    <option value="">Selecione para preencher valor...</option>
                    {listaServicos.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.nome} - R$ {s.valor_padrao}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="form-label">Valor Total (R$)</label>
                <input type="number" step="0.01" value={valor} onChange={e => setValor(e.target.value)} required />
                
                <label className="form-label">Vencimento</label>
                <input type="date" value={dataVencimento} onChange={e => setDataVencimento(e.target.value)} required />
                
                <label className="form-label">Status</label>
                <select className="form-control" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} value={status} onChange={e => setStatus(e.target.value)}>
                  <option value="PENDENTE">Pendente</option>
                  <option value="PAGA">Paga</option>
                  <option value="VENCIDA">Vencida</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setModalAberto(false)}>Cancelar</button>
                <button type="submit" className="btn-primary" style={{ width: 'auto' }}>Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}