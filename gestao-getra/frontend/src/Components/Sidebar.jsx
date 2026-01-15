import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem('usuario'));

  // 🔧 CORREÇÃO PRINCIPAL AQUI
  const role = usuario?.role?.toUpperCase() || 'ADMIN'; 
  // ADMIN | FINANCEIRO | CLIENTE

  function handleLogout() {
    if (window.confirm("Deseja realmente sair do sistema?")) {
      localStorage.removeItem('usuario');
      navigate('/');
    }
  }

  const isActive = (path) =>
    location.pathname === path ? 'menu-item active' : 'menu-item';

  /**
   * 🔐 MENU POR PERFIL
   */
  const menuPorRole = {
    ADMIN: [
      { path: '/dashboard', label: 'Dashboard' },
      { path: '/clientes', label: 'Clientes' },
      { path: '/analise', label: 'Análise' },
      { path: '/faturas', label: 'Faturas' },
      { path: '/servicos', label: 'Serviços' },
      { path: '/notas', label: 'Upload NF' },
      { path: '/pagamento', label: 'Pagamento' },
    ],
    FINANCEIRO: [
      { path: '/dashboard', label: 'Dashboard' },
      { path: '/clientes', label: 'Clientes' },
      { path: '/faturas', label: 'Faturas' },
      { path: '/pagamento', label: 'Pagamento' },
    ],
    CLIENTE: [
      { path: '/dashboard', label: 'Dashboard' },
      { path: '/notas', label: 'Upload NF' },
      { path: '/pagamento', label: 'Pagamento' },
    ],
  };

  const menu = menuPorRole[role] || [];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <span style={{ color: 'var(--getra-green-light)' }}>G</span> GETRA
        </div>

        <div className="sidebar-user">
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
            }}
          />
          <span>{usuario?.nome || 'Usuário'} ({role})</span>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={isActive(item.path)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button onClick={handleLogout} className="menu-item-logout">
          Sair do Sistema
        </button>
      </div>
    </aside>
  );
}
