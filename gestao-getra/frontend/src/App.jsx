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

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/redefinir" element={<RedefinirSenha />} />

        {/* Rotas Privadas (Do Menu Lateral) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/faturas" element={<Faturas />} />
        <Route path="/analise" element={<Analise />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/notas" element={<NotasFiscais />} />
        <Route path="/pagamento" element={<Pagamento />} />

        {/* Qualquer outra coisa volta pro login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;