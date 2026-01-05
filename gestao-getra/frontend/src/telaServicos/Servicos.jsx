import { useEffect, useState } from 'react';
import axios from 'axios';
import { Sidebar } from '../Components/Sidebar';

export function Servicos() {
  const [servicos, setServicos] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  
  // Estados do Formulário
  const [idEmEdicao, setIdEmEdicao] = useState(null);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  // Carregar dados
  const carregarServicos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/servicos');
      setServicos(response.data);
    } catch (error) {
      console.error("Erro ao buscar serviços", error);
    }
  };

  useEffect(() => {
    carregarServicos();
  }, []);

  // Abrir Modal
  function abrirModal(servico = null) {
    if (servico) {
      setIdEmEdicao(servico.id);
      setNome(servico.nome);
      setDescricao(servico.descricao || '');
      setValor(servico.valor_padrao);
    } else {
      setIdEmEdicao(null);
      setNome('');
      setDescricao('');
      setValor('');
    }
    setModalAberto(true);
  }

  // Salvar (Criar ou Editar)
  async function handleSalvar(e) {
    e.preventDefault();
    const dados = { nome, descricao, valor_padrao: valor };

    try {
      if (idEmEdicao) {
        await axios.put(`http://localhost:3000/servicos/${idEmEdicao}`, dados);
        alert("Serviço atualizado!");
      } else {
        await axios.post('http://localhost:3000/servicos', dados);
        alert("Serviço criado!");
      }
      setModalAberto(false);
      carregarServicos();
    } catch (error) {
      alert("Erro ao salvar serviço.");
    }
  }

  // Deletar
  async function handleDeletar(id) {
    if (window.confirm("Deseja excluir este serviço?")) {
      try {
        await axios.delete(`http://localhost:3000/servicos/${id}`);
        carregarServicos();
      } catch (error) {
        alert("Erro ao excluir.");
      }
    }
  }

  const formatMoney = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="content-area">
        <header className="dashboard-header-simple">
          <h2>Catálogo de Serviços</h2>
          <button className="btn-primary" style={{ width: 'auto', padding: '10px 20px' }} onClick={() => abrirModal()}>
            + Novo Serviço
          </button>
        </header>

        <main className="dashboard-main">
          {servicos.length === 0 ? (
            <p style={{ textAlign: 'center', marginTop: '40px', color: '#666' }}>Nenhum serviço cadastrado.</p>
          ) : (
            <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <tr>
                    <th style={{ padding: '15px', textAlign: 'left', color: '#64748b' }}>Nome</th>
                    <th style={{ padding: '15px', textAlign: 'left', color: '#64748b' }}>Descrição</th>
                    <th style={{ padding: '15px', textAlign: 'left', color: '#64748b' }}>Valor Padrão</th>
                    <th style={{ padding: '15px', textAlign: 'right', color: '#64748b' }}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {servicos.map(s => (
                    <tr key={s.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '15px', fontWeight: 'bold' }}>{s.nome}</td>
                      <td style={{ padding: '15px', color: '#666' }}>{s.descricao || '-'}</td>
                      <td style={{ padding: '15px', color: '#166534', fontWeight: 'bold' }}>{formatMoney(s.valor_padrao)}</td>
                      <td style={{ padding: '15px', textAlign: 'right' }}>
                        <button className="btn-edit" onClick={() => abrirModal(s)} style={{ marginRight: '10px' }}>Editar</button>
                        <button className="btn-delete" onClick={() => handleDeletar(s.id)}>Excluir</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>

      {modalAberto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{idEmEdicao ? 'Editar Serviço' : 'Novo Serviço'}</h3>
              <button className="btn-close" onClick={() => setModalAberto(false)}>×</button>
            </div>
            <form onSubmit={handleSalvar}>
              <div className="form-group">
                <label>Nome do Serviço</label>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} required placeholder="Ex: Formatação, Consultoria..." />
                
                <label>Descrição (Opcional)</label>
                <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Detalhes do serviço..." />
                
                <label>Valor Padrão (R$)</label>
                <input type="number" step="0.01" value={valor} onChange={e => setValor(e.target.value)} required placeholder="0.00" />
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