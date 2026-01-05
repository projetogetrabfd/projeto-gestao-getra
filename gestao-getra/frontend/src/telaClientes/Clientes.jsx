import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  
  const [idEmEdicao, setIdEmEdicao] = useState(null); // Guarda o ID se estivermos editando
  
  const [nomeRazao, setNomeRazao] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuario'));

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


  function limparFormulario() {
    setNomeRazao('');
    setCpfCnpj('');
    setEmail('');
    setTelefone('');
    setEndereco('');
    setIdEmEdicao(null); 
  }

  function abrirModalCriacao() {
    limparFormulario();
    setModalAberto(true);
  }

  
  function abrirModalEdicao(cliente) {
    setIdEmEdicao(cliente.id); 
    setNomeRazao(cliente.nome_razao_social);
    setCpfCnpj(cliente.cpf_cnpj);
    setEmail(cliente.email);
    setTelefone(cliente.telefone || '');
    setEndereco(cliente.endereco_completo || '');
    setModalAberto(true);
  }

 
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
   
        await axios.put(`http://localhost:3000/clientes/${idEmEdicao}`, dados);
        alert("Cliente atualizado com sucesso!");
      } else {
   
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

 
  async function handleDeletar(id) {
    
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
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Gestão Getra</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span>Olá, <strong>{usuario?.nome}</strong></span>
          <button onClick={handleLogout} className="btn-logout">Sair</button>
        </div>
      </header>

      <main className="dashboard-main">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 className="section-title" style={{marginBottom: 0, border: 'none'}}>Carteira de Clientes</h2>
          <button 
            className="btn-primary" 
            style={{ width: 'auto', padding: '10px 20px' }}
            onClick={abrirModalCriacao}
          >
            + Novo Cliente
          </button>
        </div>
        
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
                
                {/* BOTÕES DE AÇÃO */}
                <div className="actions-container">
                  <button 
                    className="btn-edit" 
                    onClick={() => abrirModalEdicao(cliente)}
                  >
                    Editar
                  </button>
                  <button 
                    className="btn-delete" 
                    onClick={() => handleDeletar(cliente.id)}
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>

      {modalAberto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              {/* Título dinâmico */}
              <h3>{idEmEdicao ? 'Editar Cliente' : 'Adicionar Cliente'}</h3>
              <button className="btn-close" onClick={() => setModalAberto(false)}>×</button>
            </div>
            
            <form onSubmit={handleSalvarCliente}>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Nome / Razão Social" 
                  value={nomeRazao}
                  onChange={e => setNomeRazao(e.target.value)}
                  required 
                />
                <input 
                  type="text" 
                  placeholder="CPF ou CNPJ" 
                  value={cpfCnpj}
                  onChange={e => setCpfCnpj(e.target.value)}
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required 
                />
                <input 
                  type="text" 
                  placeholder="Telefone" 
                  value={telefone}
                  onChange={e => setTelefone(e.target.value)}
                />
                <input 
                  type="text" 
                  placeholder="Endereço Completo" 
                  value={endereco}
                  onChange={e => setEndereco(e.target.value)}
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setModalAberto(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  {idEmEdicao ? 'Salvar Alterações' : 'Cadastrar Cliente'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}