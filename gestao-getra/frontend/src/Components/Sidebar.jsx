import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation(); // Para saber em qual página estamos
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  function handleLogout() {
    if (window.confirm("Deseja realmente sair do sistema?")) {
      localStorage.removeItem('usuario');
      navigate('/');
    }
  }

  // Função auxiliar para verificar se o link está ativo
  const isActive = (path) => location.pathname === path ? 'menu-item active' : 'menu-item';

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Gestão Getra</h2>
        <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '5px' }}>
          {usuario?.nome || 'Usuário'}
        </p>
      </div>

      <nav className="sidebar-menu">
        <Link to="/dashboard" className={isActive('/dashboard')}>
          📊 Dashboard
        </Link>
        
        <Link to="/clientes" className={isActive('/clientes')}>
          👥 Clientes
        </Link>
        
        <Link to="/faturas" className={isActive('/faturas')}>
          💰 Faturas
        </Link>

        <Link to="/servicos" className={isActive('/servicos')}>
          🛠️ Serviços
        </Link>

        <Link to="/notas" className={isActive('/notas')}>
            📄 Upload NF
        </Link>
      </nav>

      <div className="sidebar-footer">
        <button 
          onClick={handleLogout} 
          className="menu-item" 
          style={{ width: '100%', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer', borderLeft: '4px solid transparent' }}
        >
          🚪 Sair
        </button>
      </div>
    </aside>
  );
}