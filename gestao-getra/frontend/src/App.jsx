import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Importação das Telas Públicas
import { Login } from './telaLogin/Login';
import { Cadastro } from './telaLogin/cadastroUsuario/CadastroUsuario';
import { RedefinirSenha } from './telaLogin/redefinirSenha/RedefinirSenha';

// Layout e Proteção
import { MainLayout } from './layout/MainLayout';
import { ProtectedRoute } from './Components/ProtectedRoute';

// Telas do Sistema
import { Dashboard } from './pages/Dashboard';
import { Clientes } from './telaClientes/Clientes';
import { Faturas } from './telaFaturas/Faturas';
import { Analise } from './telaAnalise/Analise';
import { Servicos } from './telaServicos/Servicos';
import { NotasFiscais } from './telaNotas/NotasFiscais';
import { Pagamento } from './pagamento/Pagamento';

function App() {
  return (
    <Routes>
      
      {/* rotas públicas - sem sidebar */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/redefinir" element={<RedefinirSenha />} />

      {/* rotas protegidas e com layouts */}
      <Route element={
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      }>
        
        {/* aqui todos os usuários acessam */}
        {/* o Dashboard/index.jsx já decide qual versão mostrar */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* a tela de Notas também deve ter lógica interna se precisar diferenciar */}
        <Route path="/notas" element={<NotasFiscais />} />
        <Route path="/pagamento" element={<Pagamento />} />

        {/* financeiro e admin */}
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

      </Route> 
      {/* rota de fallback (404) */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;