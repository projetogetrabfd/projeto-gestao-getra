import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Se você usar Contexto

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  // Se você tiver um hook de auth, use a função dele, senão faça manual:
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // A ROTA TEM QUE SER /auth/login
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        senha
      });

      const usuario = response.data;

      // Salva no LocalStorage
      localStorage.setItem('usuario', JSON.stringify(usuario));
      
      // Se usar Contexto/Hook, atualize ele aqui (ex: login(usuario))
      
      // Redireciona
      if (usuario.role === 'CLIENTE') {
        navigate('/dashboard'); // O index.jsx vai redirecionar pro DashboardCliente
      } else {
        navigate('/dashboard'); // O index.jsx vai redirecionar pro DashboardDiretoria
      }

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.erro || "Erro ao conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-header">Acesse sua conta</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
               type="email" 
               value={email} 
               onChange={e => setEmail(e.target.value)} 
               required 
            />
            
            <label className="form-label">Senha</label>
            <input 
               type="password" 
               value={senha} 
               onChange={e => setSenha(e.target.value)} 
               required 
            />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        
        <div className="auth-links">
           <a href="/cadastro">Não tem conta? Cadastre-se</a>
           <br/><br/>
           <a href="/redefinir">Esqueci minha senha</a>
        </div>
      </div>
    </div>
  );
}