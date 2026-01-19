import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Importação das Telas
import { Login } from './telaLogin/Login';
import { Cadastro } from './telaLogin/cadastroUsuario/CadastroUsuario';
import { RedefinirSenha } from './telaLogin/redefinirSenha/RedefinirSenha';

// Telas do Sistema
import { Dashboard } from './telaDashboard/Dashboard';
import { Clientes } from './telaClientes/Clientes';
import { Faturas } from './telaFaturas/Faturas';
import { Analise } from './telaAnalise/Analise';
import { Servicos } from './telaServicos/Servicos';
import { NotasFiscais } from './telaNotas/NotasFiscais';
import { Pagamento } from './pagamento/Pagamento';

// Componentes de Proteção
import { ProtectedRoute } from './Components/ProtectedRoute';

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/redefinir" element={<RedefinirSenha />} />

        {/* Rotas Privadas Do Menu Lateral */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/clientes" element={
          <ProtectedRoute requiredRole="FINANCEIRO">
            <Clientes />
          </ProtectedRoute>
        } />
        <Route path="/faturas" element={
          <ProtectedRoute requiredRole="FINANCEIRO">
            <Faturas />
          </ProtectedRoute>
        } />
        <Route path="/analise" element={
          <ProtectedRoute requiredRole="FINANCEIRO">
            <Analise />
          </ProtectedRoute>
        } />
        <Route path="/servicos" element={
          <ProtectedRoute requiredRole="FINANCEIRO">
            <Servicos />
          </ProtectedRoute>
        } />
        <Route path="/notas" element={
          <ProtectedRoute>
            <NotasFiscais />
          </ProtectedRoute>
        } />
        <Route path="/pagamento" element={
          <ProtectedRoute>
            <Pagamento />
          </ProtectedRoute>
        } />

        {/* Qualquer outra coisa volta pro login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;