import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleCadastro(event) {
    event.preventDefault();
    setLoading(true);

    try {
      // Chama o seu backend
      await axios.post('http://localhost:3000/auth/register', {
        nome,
        email,
        senha
      });

      alert("Usuário cadastrado com sucesso!");
      navigate('/'); // Manda o usuário para a tela de Login
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar: " + (error.response?.data?.error || "Verifique os dados"));
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
          <p className="auth-subtitle">Solicitar Acesso ao Sistema</p>
        </div>

        <form onSubmit={handleCadastro}>
          <div className="form-group">
            <label className="form-label">Nome Completo</label>
            <input 
              type="text" 
              placeholder="Ex: João Silva" 
              value={nome} 
              onChange={e => setNome(e.target.value)} 
              required 
            />
            
            <label className="form-label">E-mail Corporativo</label>
            <input 
              type="email" 
              placeholder="seu.email@getra.com.br" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required 
            />
            
            <label className="form-label">Definir Senha</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={senha} 
              onChange={e => setSenha(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Processando...' : 'Criar Conta'}
          </button>
        </form>
        
        <div className="auth-links">
          <p>Já possui conta? <Link to="/">Voltar ao Login</Link></p>
        </div>
      </div>
    </div>
  );
}