import React, { useState } from 'react';
import './cadastro.css';

const CadastroUsuario = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });
    const [mensagem, setMensagem] = useState({ texto: '', tipo: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMensagem({ texto: '', tipo: '' });

        const { nome, email, senha, confirmarSenha } = formData;

        if (!nome || !email || !senha || !confirmarSenha) {
            setMensagem({ texto: 'Por favor, preencha todos os campos.', tipo: 'error' });
            return;
        }

        if (senha !== confirmarSenha) {
            setMensagem({ texto: 'As senhas não coincidem. Tente novamente.', tipo: 'error' });
            setFormData(prev => ({ ...prev, senha: '', confirmarSenha: '' }));
            return;
        }

        if (senha.length < 6) {
            setMensagem({ texto: 'A senha deve ter pelo menos 6 caracteres.', tipo: 'error' });
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setMensagem({ 
                texto: 'Cadastro realizado com sucesso! Redirecionando para o login...', 
                tipo: 'success' 
            });
            setLoading(false);

            setTimeout(() => {
                onNavigate('login');
            }, 2000);
        }, 1500);
    };

    return (
        <div className="cadastro-container">
            <div className="cadastro-header">
                <h2>Crie sua conta</h2>
                <p>Preencha os dados abaixo para se cadastrar no sistema.</p>
            </div>

            {mensagem.texto && (
                <div className={`message-container ${mensagem.tipo}`} style={{ display: 'block' }}>
                    {mensagem.texto}
                </div>
            )}

            <form id="cadastro-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome Completo</label>
                    <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        placeholder="Seu nome completo" 
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="seu@email.com" 
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="senha">Senha</label>
                    <input 
                        type="password" 
                        id="senha" 
                        name="senha" 
                        placeholder="Crie uma senha" 
                        value={formData.senha}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmar-senha">Confirmar Senha</label>
                    <input 
                        type="password" 
                        id="confirmar-senha" 
                        name="confirmarSenha" 
                        placeholder="Repita a senha" 
                        value={formData.confirmarSenha}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? 'Cadastrando...' : 'Cadastrar'}
                </button>

                <button 
                    type="button" 
                    className="back-to-login link-button"
                    onClick={() => onNavigate('login')}
                    style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', textDecoration: 'none', cursor: 'pointer', display: 'block', width: '100%', marginTop: '20px' }}
                >
                    Já tem uma conta? Faça Login
                </button>
            </form>
        </div>
    );
};

export default CadastroUsuario;
