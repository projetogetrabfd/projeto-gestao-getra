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
        <h2>Novo Usuário</h2>
        <p style={{marginBottom: '20px', color: '#666'}}>Preencha os dados para acesso ao sistema.</p>
        
        <form onSubmit={handleCadastro} className="form-group">
          <input 
            type="text" 
            placeholder="Nome Completo" 
            value={nome} 
            onChange={e => setNome(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="E-mail Corporativo" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Senha Forte" 
            value={senha} 
            onChange={e => setSenha(e.target.value)} 
            required 
          />
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Processando...' : 'Cadastrar Usuário'}
          </button>
        </form>
        
        <div className="auth-links">
          <p>Já possui conta? <Link to="/">Voltar ao Login</Link></p>
        </div>
      </div>
    </div>
  );
}