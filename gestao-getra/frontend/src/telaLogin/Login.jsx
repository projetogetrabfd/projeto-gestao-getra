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
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        senha
      });

      // Salva o usuário retornado pelo backend
      localStorage.setItem(
        'usuario',
        JSON.stringify(response.data.user)
      );

      // Redireciona após login
      navigate('/dashboard');

    } catch (error) {
      console.error(error);
      alert(
        'Falha no login: ' +
        (error.response?.data?.error || 'Email ou senha incorretos')
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-logo-text">
            <span>G</span> GETRA
          </h1>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              E-mail Corporativo
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu.email@getra.com.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="senha" className="form-label">
              Senha de Acesso
            </label>
            <input
              id="senha"
              type="password"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Autenticando...' : 'Acessar Painel'}
          </button>
        </form>

        <div className="auth-links">
          <p>
            Esqueceu sua senha?{' '}
            <Link to="/redefinir">Recuperar acesso</Link>
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            Novo colaborador?{' '}
            <Link to="/cadastro">Solicitar conta</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
