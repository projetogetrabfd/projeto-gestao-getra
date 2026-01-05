import { useState } from 'react';
import Login from './telaLogin/Login';
import RedefinirSenha from './telaLogin/redefinirSenha/RedefinirSenha';
import CadastroUsuario from './telaLogin/cadastroUsuario/CadastroUsuario';
import Faturamento from './telaFaturamento/pages/Faturamento';

function App() {
  const [currentScreen, setCurrentScreen] = useState('faturamento');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <Login onNavigate={setCurrentScreen} />;
      case 'redefinir':
        return <RedefinirSenha onNavigate={setCurrentScreen} />;
      case 'cadastro':
        return <CadastroUsuario onNavigate={setCurrentScreen} />;
      case 'faturamento':
        return <Faturamento />;
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
