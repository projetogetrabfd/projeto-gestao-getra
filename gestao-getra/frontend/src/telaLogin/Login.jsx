import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    setLoading(true);

    try {
      // Chama o backend para verificar a senha
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        senha
      });

      // SUCESSO! O backend devolveu os dados do usuário.
      // Vamos salvar no navegador para não perder o login ao atualizar a página.
      localStorage.setItem('usuario', JSON.stringify(response.data.user));

      // Redireciona para a tela principal
      navigate('/clientes'); 
      
    } catch (error) {
      console.error(error);
      alert("Falha no login: " + (error.response?.data?.error || "Email ou senha incorretos"));
    } finally {
      setLoading(false);
    }
  }

 return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Gestão Getra</h1>
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="form-group">
          <input 
            type="email" 
            placeholder="E-mail Corporativo" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={senha} 
            onChange={e => setSenha(e.target.value)} 
            required 
          />
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Acessando...' : 'Acessar Sistema'}
          </button>
        </form>
        <div className="auth-links">
          <p>Não tem acesso? <Link to="/cadastro">Solicitar Cadastro</Link></p>
        </div>
      </div>
    </div>
  );
}