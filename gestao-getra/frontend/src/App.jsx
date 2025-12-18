import { useState } from 'react';
import './App.css';
import Login from './telaLogin/Login';
import RedefinirSenha from './telaLogin/redefinirSenha/RedefinirSenha';
import CadastroUsuario from './telaLogin/cadastroUsuario/CadastroUsuario';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <Login onNavigate={setCurrentScreen} />;
      case 'redefinir':
        return <RedefinirSenha onNavigate={setCurrentScreen} />;
      case 'cadastro':
        return <CadastroUsuario onNavigate={setCurrentScreen} />;
      default:
        return <Login onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="app-container">
      {renderScreen()}
    </div>
  );
}

export default App;
