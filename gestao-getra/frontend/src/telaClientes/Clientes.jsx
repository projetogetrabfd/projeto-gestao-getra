import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Clientes() {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();
  
  // Recupera o usuário salvo no Login
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  useEffect(() => {
    // 1. Segurança: Se não estiver logado, manda voltar pro Login
    if (!usuario) {
      navigate('/');
      return;
    }

    // 2. Tenta buscar os clientes do Backend
    axios.get('http://localhost:3000/clientes')
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar clientes:", error);
      });
  }, [navigate, usuario]);

  function handleLogout() {
    localStorage.removeItem('usuario'); // Limpa a sessão
    navigate('/'); // Volta pro login
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Gestão Getra</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span>Olá, <strong>{usuario?.nome}</strong></span>
          <button onClick={handleLogout} className="btn-logout">
            Sair
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <h2 className="section-title">Carteira de Clientes</h2>
        
        {clientes.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <p>Nenhum cliente encontrado na base de dados.</p>
          </div>
        ) : (
          <ul className="client-list">
            {clientes.map(cliente => (
              <li key={cliente.id} className="client-card">
                <div className="client-info">
                  <strong>{cliente.nome}</strong>
                  <span>{cliente.email}</span>
                </div>
                <div style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>
                  Ativo
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}