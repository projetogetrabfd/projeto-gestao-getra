import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function ProtectedRoute({ children, requiredRole }) {
  const { user, loading } = useAuth(); // Certifique-se que seu hook retorna 'loading'
  const location = useLocation();

  // 1. Enquanto carrega o usuário do localStorage/API, mostre algo (evita tela branca)
  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>Carregando sistema...</div>;
  }

  // 2. Se não tem usuário logado, manda pro Login
  if (!user) {
    // O 'state' serve para voltar pra página que ele tentou acessar depois de logar
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // 3. Se a rota exige um cargo (ex: FINANCEIRO) e o usuário não tem
  if (requiredRole && user.role !== requiredRole && user.role !== 'ADMIN_MASTER') {
    // Redireciona para o Dashboard (que é seguro para todos) ou mostra erro
    return <Navigate to="/dashboard" replace />;
  }

  // 4. Se passou por tudo, renderiza o conteúdo (O MainLayout ou a Página)
  return children;
}