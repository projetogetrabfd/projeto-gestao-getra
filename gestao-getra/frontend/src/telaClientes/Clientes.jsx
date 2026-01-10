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
    <div className="app-container">
      <Sidebar />
      
      <main className="main-content">
        <header className="page-header">
          <h2 className="page-title">Gestão de Clientes</h2>
          <button 
            className="btn-primary" 
            style={{ width: 'auto' }}
            onClick={abrirModalCriacao}
          >
            + Novo Cliente
          </button>
        </header>

        {clientes.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
            <p>Nenhum cliente encontrado. Cadastre o primeiro!</p>
          </div>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nome / Razão Social</th>
                  <th>CPF / CNPJ</th>
                  <th>Contato</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map(cliente => (
                  <tr key={cliente.id}>
                    <td>
                      <strong>{cliente.nome_razao_social}</strong>
                      {cliente.endereco_completo && (
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                          {cliente.endereco_completo}
                        </div>
                      )}
                    </td>
                    <td>{cliente.cpf_cnpj}</td>
                    <td>
                      <div>{cliente.email}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{cliente.telefone}</div>
                    </td>
                    <td>
                      <button className="btn-edit" onClick={() => abrirModalEdicao(cliente)}>
                        Editar
                      </button>
                      <button className="btn-delete" onClick={() => handleDeletar(cliente.id)}>
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
              <h3>{idEmEdicao ? 'Editar Cliente' : 'Novo Cliente'}</h3>
              <button className="btn-close" onClick={() => setModalAberto(false)}>×</button>
            </div>
            
            <form onSubmit={handleSalvarCliente}>
              <div className="form-group">
                <label className="form-label">Nome ou Razão Social</label>
                <input type="text" value={nomeRazao} onChange={e => setNomeRazao(e.target.value)} required />
                
                <label className="form-label">CPF ou CNPJ</label>
                <input type="text" value={cpfCnpj} onChange={e => setCpfCnpj(e.target.value)} required />
                
                <label className="form-label">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                
                <label className="form-label">Telefone</label>
                <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)} />
                
                <label className="form-label">Endereço Completo</label>
                <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setModalAberto(false)}>Cancelar</button>
                <button type="submit" className="btn-primary" style={{ width: 'auto' }}>
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
