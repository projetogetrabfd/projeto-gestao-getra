// ARQUIVO: frontend/src/hooks/useAuth.js
import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('usuario');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      console.log('Usuário carregado:', parsedUser);
      setUser(parsedUser);
    }
    setLoading(false);
  }, []);

  const hasPermission = (requiredRole) => {
    if (!user) return false;
    
    const roleHierarchy = {
      'CLIENTE': 1,
      'FINANCEIRO': 2,
      'ADMIN_MASTER': 3
    };
    
    const userLevel = roleHierarchy[user.role] || 0;
    const requiredLevel = roleHierarchy[requiredRole] || 0;
    
    return userLevel >= requiredLevel;
  };

  const canAccess = (page) => {
    if (!user) return false;
    
    console.log('Verificando permissão para:', user.role, 'página:', page);
    
    const permissions = {
      'CLIENTE': ['notas', 'pagamento', 'dashboard'],
      'FINANCEIRO': ['dashboard', 'clientes', 'faturas', 'analise', 'servicos', 'notas', 'pagamento'],
      'ADMIN_MASTER': ['dashboard', 'clientes', 'faturas', 'analise', 'servicos', 'notas', 'pagamento']
    };
    
    const hasAccess = permissions[user.role]?.includes(page) || false;
    console.log('Tem acesso:', hasAccess);
    return hasAccess;
  };

  return { user, loading, hasPermission, canAccess };
}