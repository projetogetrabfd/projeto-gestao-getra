import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Cadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    cpf_cnpj: '' // Adicionei caso precise vincular cliente
  });

  async function handleCadastro(e) {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      // Ajuste para a rota que criamos no passo 2
      await axios.post('http://82.208.21.143:2000/auth/register', {
        nome: formData.nome,
        email: formData.email,
        senha: formData.senha,
        cpf_cnpj: formData.cpf_cnpj,
        role: 'CLIENTE' // Cadastro público sempre cria Cliente
      });

      alert("Cadastro realizado com sucesso! Faça login.");
      navigate('/'); // Volta para o Login

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.erro || "Erro ao realizar cadastro.");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-header">Crie sua conta</h2>
        <form onSubmit={handleCadastro}>
          <div className="form-group">
            <label className="form-label">Nome Completo</label>
            <input 
              type="text" 
              required
              value={formData.nome}
              onChange={e => setFormData({...formData, nome: e.target.value})}
            />

            <label className="form-label">CPF ou CNPJ</label>
            <input 
              type="text" 
              required
              value={formData.cpf_cnpj}
              onChange={e => setFormData({...formData, cpf_cnpj: e.target.value})}
            />
            
            <label className="form-label">Email</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />

            <label className="form-label">Senha</label>
            <input 
              type="password" 
              required
              value={formData.senha}
              onChange={e => setFormData({...formData, senha: e.target.value})}
            />

            <label className="form-label">Confirmar Senha</label>
            <input 
              type="password" 
              required
              value={formData.confirmarSenha}
              onChange={e => setFormData({...formData, confirmarSenha: e.target.value})}
            />
          </div>

          <button type="submit" className="btn-primary">Cadastrar</button>
        </form>
        
        <div className="auth-links">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                Já tem conta? Faça Login
            </a>
        </div>
      </div>
    </div>
  );
}