import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import { Login } from './telaLogin/Login';
import { RedefinirSenha } from './telaLogin/redefinirSenha/RedefinirSenha';
import { Cadastro } from './telaLogin/cadastroUsuario/CadastroUsuario';

// 1. Importe a nova tela (Ajuste o caminho se criou em outra pasta)
import { Clientes } from './telaClientes/Clientes'; 

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/redefinir" element={<RedefinirSenha />} />

        {/* 2. Adicione a rota oficial */}
        <Route path="/clientes" element={<Clientes />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;