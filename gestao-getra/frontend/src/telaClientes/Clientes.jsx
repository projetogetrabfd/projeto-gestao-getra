import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Sidebar } from '../Components/Sidebar';

export function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  
  // ESTADOS DO FORMULÁRIO
  const [idEmEdicao, setIdEmEdicao] = useState(null); // Guarda o ID se estivermos editando
  
  const [nomeRazao, setNomeRazao] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  // --- BUSCAR CLIENTES ---
  const carregarClientes = () => {
    axios.get('http://localhost:3000/clientes')
      .then(response => setClientes(response.data))
      .catch(error => console.error("Erro:", error));
  };

  useEffect(() => {
    if (!usuario) {
      navigate('/');
      return;
    }
    carregarClientes();
  }, [navigate, usuario]);

  function handleLogout() {
    localStorage.removeItem('usuario');
    navigate('/');
  }

  // --- LIMPAR FORMULÁRIO ---
  function limparFormulario() {
    setNomeRazao('');
    setCpfCnpj('');
    setEmail('');
    setTelefone('');
    setEndereco('');
    setIdEmEdicao(null); // Importante: Reseta o modo de edição
  }

  function abrirModalCriacao() {
    limparFormulario();
    setModalAberto(true);
  }

  // --- PREPARAR EDIÇÃO (Preenche o modal com dados existentes) ---
  function abrirModalEdicao(cliente) {
    setIdEmEdicao(cliente.id); // Diz para o sistema: "Estamos editando este cara"
    setNomeRazao(cliente.nome_razao_social);
    setCpfCnpj(cliente.cpf_cnpj);
    setEmail(cliente.email);
    setTelefone(cliente.telefone || '');
    setEndereco(cliente.endereco_completo || '');
    setModalAberto(true);
  }

  // --- SALVAR (CRIA OU ATUALIZA) ---
  async function handleSalvarCliente(e) {
    e.preventDefault();
    const dados = {
      nome_razao_social: nomeRazao,
      cpf_cnpj: cpfCnpj,
      email: email,
      telefone: telefone,
      endereco_completo: endereco
    };

    try {
      if (idEmEdicao) {
        // MODO ATUALIZAR (PUT)
        await axios.put(`http://localhost:3000/clientes/${idEmEdicao}`, dados);
        alert("Cliente atualizado com sucesso!");
      } else {
        // MODO CRIAR (POST)
        await axios.post('http://localhost:3000/clientes', dados);
        alert("Cliente cadastrado com sucesso!");
      }
      
      setModalAberto(false);
      limparFormulario();
      carregarClientes();
    } catch (error) {
      alert("Erro ao salvar. Verifique os dados.");
      console.error(error);
    }
  }

  // --- DELETAR ---
  async function handleDeletar(id) {
    // Pergunta de segurança
    const confirmacao = window.confirm("Tem certeza que deseja excluir este cliente? Essa ação não pode ser desfeita.");
    
    if (confirmacao) {
      try {
        await axios.delete(`http://localhost:3000/clientes/${id}`);
        alert("Cliente removido!");
        carregarClientes();
      } catch (error) {
        alert("Erro ao deletar cliente.");
        console.error(error);
      }
    }
  }

  return (
    <div className="app-layout">
      {/* 1. O Menu Lateral Fixo */}
      <Sidebar />

      {/* 2. A Área de Conteúdo (Direita) */}
      <div className="content-area">
        
        {/* Um header simples branco só para dizer onde estamos */}
        <header className="dashboard-header-simple">
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)' }}>Gestão de Clientes</h2>
          <button 
            className="btn-primary" 
            style={{ width: 'auto', padding: '10px 20px' }}
            onClick={abrirModalCriacao}
          >
            + Novo Cliente
          </button>
        </header>

        {/* O Conteúdo Principal (Lista) */}
        <main className="dashboard-main">
          
          {clientes.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <p>Nenhum cliente encontrado.</p>
            </div>
          ) : (
            <ul className="client-list">
              {clientes.map(cliente => (
                <li key={cliente.id} className="client-card">
                  <div className="client-info">
                    <strong>{cliente.nome_razao_social}</strong>
                    <span>{cliente.email}</span>
                    <span style={{fontSize: '0.8rem', color: '#999', display:'block'}}>
                      {cliente.telefone} • {cliente.cpf_cnpj}
                    </span>
                  </div>
                  
                  <div className="actions-container">
                    <button className="btn-edit" onClick={() => abrirModalEdicao(cliente)}>
                      Editar
                    </button>
                    <button className="btn-delete" onClick={() => handleDeletar(cliente.id)}>
                      Excluir
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </main>
      </div>

      {/* MODAL (Pode ficar aqui no final, igual estava antes) */}
      {modalAberto && (
        <div className="modal-overlay">
           {/* ... (o código do modal continua igual) ... */}
           {/* ... Copie o conteúdo interno do modal antigo aqui ... */}
           <div className="modal-content">
            <div className="modal-header">
              <h3>{idEmEdicao ? 'Editar Cliente' : 'Adicionar Cliente'}</h3>
              <button className="btn-close" onClick={() => setModalAberto(false)}>×</button>
            </div>
            
            <form onSubmit={handleSalvarCliente}>
              <div className="form-group">
                <input type="text" placeholder="Nome / Razão Social" value={nomeRazao} onChange={e => setNomeRazao(e.target.value)} required />
                <input type="text" placeholder="CPF ou CNPJ" value={cpfCnpj} onChange={e => setCpfCnpj(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="text" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
                <input type="text" placeholder="Endereço Completo" value={endereco} onChange={e => setEndereco(e.target.value)} />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setModalAberto(false)}>Cancelar</button>
                <button type="submit" className="btn-primary">{idEmEdicao ? 'Salvar Alterações' : 'Cadastrar Cliente'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}