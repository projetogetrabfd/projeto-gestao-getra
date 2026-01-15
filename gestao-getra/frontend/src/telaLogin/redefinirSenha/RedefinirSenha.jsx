import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RedefinirSenha = () => {
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState({ texto: '', tipo: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setMensagem({ texto: '', tipo: '' });

        if (!email.trim()) {
            setMensagem({ texto: 'Por favor, informe seu e-mail.', tipo: 'error' });
            return;
        }

        setLoading(true);

        // Simulação de envio
        setTimeout(() => {
            setMensagem({ 
                texto: 'Se o e-mail informado estiver cadastrado, você receberá instruções para redefinir sua senha.', 
                tipo: 'success' 
            });
            setLoading(false);

            setTimeout(() => {
                navigate('/');
            }, 3000);
        }, 1500);
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className="auth-logo-text">
                        <span>G</span> GETRA
                    </h1>
                    <p className="auth-subtitle">Recuperação de Acesso</p>
                </div>

                <div className="auth-description" style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                    <p>Informe o e-mail associado à sua conta para receber as instruções.</p>
                </div>

                {mensagem.texto && (
                    <div style={{ 
                        padding: '1rem', 
                        marginBottom: '1rem', 
                        borderRadius: '8px', 
                        fontSize: '0.9rem',
                        backgroundColor: mensagem.tipo === 'error' ? '#FEF2F2' : '#F0FDF4',
                        color: mensagem.tipo === 'error' ? '#DC2626' : '#166534',
                        border: `1px solid ${mensagem.tipo === 'error' ? '#FECACA' : '#BBF7D0'}`
                    }}>
                        {mensagem.texto}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">E-mail Corporativo</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="seu.email@getra.com.br" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-primary" disabled={loading}>
                        {loading ? 'Enviando...' : 'Enviar Instruções'}
                    </button>
                </form>

                <div className="auth-links">
                    <p>Lembrou a senha? <Link to="/">Voltar ao Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export { RedefinirSenha };
