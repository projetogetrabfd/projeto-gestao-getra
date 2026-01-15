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
    <div className="app-container">
      <Sidebar />
      
      <main className="main-content">
        <header className="page-header">
          <h2 className="page-title">Catálogo de Serviços</h2>
          <button className="btn-primary" style={{ width: 'auto' }} onClick={() => abrirModal()}>
            + Novo Serviço
          </button>
        </header>

        {servicos.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
            <p>Nenhum serviço cadastrado. Crie o primeiro!</p>
          </div>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Valor Padrão</th>
                  <th style={{ textAlign: 'right' }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {servicos.map(servico => (
                  <tr key={servico.id}>
                    <td><strong>{servico.nome}</strong></td>
                    <td style={{ color: 'var(--text-secondary)' }}>{servico.descricao || '-'}</td>
                    <td style={{ fontWeight: '600', color: 'var(--getra-green-dark)' }}>
                      {formatMoney(servico.valor_padrao)}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="btn-edit" onClick={() => abrirModal(servico)}>
                        Editar
                      </button>
                      <button className="btn-delete" onClick={() => handleDeletar(servico.id)}>
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* MODAL */}
      {modalAberto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{idEmEdicao ? 'Editar Serviço' : 'Novo Serviço'}</h3>
              <button className="btn-close" onClick={() => setModalAberto(false)}>×</button>
            </div>
            
            <form onSubmit={handleSalvar}>
              <div className="form-group">
                <label className="form-label">Nome do Serviço</label>
                <input 
                  type="text" 
                  value={nome} 
                  onChange={e => setNome(e.target.value)} 
                  required 
                  placeholder="Ex: Consultoria Mensal"
                />
                
                <label className="form-label">Descrição</label>
                <textarea 
                  value={descricao} 
                  onChange={e => setDescricao(e.target.value)} 
                  rows="3"
                  className="form-control"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', resize: 'vertical' }}
                />

                <label className="form-label">Valor Padrão (R$)</label>
                <input 
                  type="number" 
                  step="0.01" 
                  value={valor} 
                  onChange={e => setValor(e.target.value)} 
                  required 
                  placeholder="0.00"
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setModalAberto(false)}>Cancelar</button>
                <button type="submit" className="btn-primary" style={{ width: 'auto' }}>
                  {idEmEdicao ? 'Salvar Alterações' : 'Criar Serviço'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}