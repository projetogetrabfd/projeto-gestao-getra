import { useEffect, useState } from 'react';
import axios from 'axios';

export function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  
  // ESTADOS DO FORMULÁRIO
  const [idEmEdicao, setIdEmEdicao] = useState(null);
  
  const [nomeRazao, setNomeRazao] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  // --- BUSCAR CLIENTES ---
  const carregarClientes = () => {
    axios.get('http://82.208.21.143:2000/clientes')
      .then(response => setClientes(response.data))
      .catch(error => console.error("Erro:", error));
  };

  useEffect(() => {
    carregarClientes();
  }, []);

  // --- LIMPAR FORMULÁRIO ---
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

  // --- PREPARAR EDIÇÃO ---
  function abrirModalEdicao(cliente) {
    setIdEmEdicao(cliente.id);
    setNomeRazao(cliente.nome_razao_social);
    setCpfCnpj(cliente.cpf_cnpj);
    setEmail(cliente.email);
    setTelefone(cliente.telefone || '');
    setEndereco(cliente.endereco_completo || '');
    setModalAberto(true);
  }

  // --- SALVAR ---
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
        await axios.put(`http://82.208.21.143:2000/clientes/${idEmEdicao}`, dados);
        alert("Cliente atualizado com sucesso!");
      } else {
        await axios.post('http://82.208.21.143:2000/clientes', dados);
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
    const confirmacao = window.confirm("Tem certeza que deseja excluir este cliente?");
    
    if (confirmacao) {
      try {
        await axios.delete(`http://82.208.21.143:2000/clientes/${id}`);
        alert("Cliente removido!");
        carregarClientes();
      } catch (error) {
        alert("Erro ao deletar cliente.");
        console.error(error);
      }
    }
  }

  return (
    <div>
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