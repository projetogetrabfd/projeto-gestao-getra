import React from 'react';
import { useAuth } from '../../hooks/useAuth';

// Importando as 3 telas
import { DashboardCliente } from './DashboardCliente';
import { DashboardDiretoria } from './DashboardDiretoria';
import { DashboardFinanceiro } from './DashboardFinanceiro';

// Este arquivo é apenas o "Semáforo".
// Ele não tem layout, nem sidebar. Ele só escolhe qual dashboard mostrar.
export function Dashboard() {
  const { user } = useAuth();

  if (!user) return <p>Carregando...</p>;

  switch (user.role) {
    case 'CLIENTE':
      return <DashboardCliente />;
      
    case 'FINANCEIRO':
      return <DashboardFinanceiro />; 

    case 'ADMIN_MASTER':
    case 'ADMIN':
    case 'DIRETORIA':
      return <DashboardDiretoria />;
      
    default:
      return (
        <div style={{ padding: 20 }}>
            <h2>Perfil não identificado</h2>
            <p>Seu usuário ({user.nome}) tem o perfil: <strong>{user.role}</strong>, que não possui dashboard configurado.</p>
        </div>
      );
  }
}