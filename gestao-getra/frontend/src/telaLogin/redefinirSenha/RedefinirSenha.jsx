import React, { useState } from 'react';
import './redefinir.css';

const RedefinirSenha = ({ onNavigate }) => {
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState({ texto: '', tipo: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMensagem({ texto: '', tipo: '' });

        if (!email.trim()) {
            setMensagem({ texto: 'Por favor, informe seu e-mail.', tipo: 'error' });
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setMensagem({ 
                texto: 'Se o e-mail informado estiver cadastrado, você receberá instruções para redefinir sua senha.', 
                tipo: 'success' 
            });
            setLoading(false);

            setTimeout(() => {
                onNavigate('login');
            }, 3000);
        }, 1500);
    };

    return (
        <div className="redefinir-container">
            <div className="redefinir-header">
                <h2>Redefinir Senha</h2>
                <p>Informe o e-mail associado à sua conta para receber as instruções de recuperação.</p>
            </div>

            {mensagem.texto && (
                <div className={`message-container ${mensagem.tipo}`} style={{ display: 'block' }}>
                    {mensagem.texto}
                </div>
            )}

            <form id="redefinir-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="seu@email.com" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar instruções'}
                </button>

                <button 
                    type="button" 
                    className="back-to-login link-button"
                    onClick={() => onNavigate('login')}
                    style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', textDecoration: 'none', cursor: 'pointer', display: 'block', width: '100%', marginTop: '20px' }}
                >
                    &larr; Voltar para o Login
                </button>
            </form>
        </div>
    );
};

export { RedefinirSenha };
