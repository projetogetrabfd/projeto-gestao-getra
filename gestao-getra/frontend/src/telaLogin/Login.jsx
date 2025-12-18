import React, { useState } from 'react';
import './login.css';

const Login = ({ onNavigate }) => {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const USUARIOS_MOCK = [
        { usuario: 'admin', senha: '123', perfil: 'Administrador' },
        { usuario: 'financeiro', senha: '123', perfil: 'Financeiro' },
        { usuario: 'diretor', senha: '123', perfil: 'Diretor' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setErro('');

        if (!usuario.trim() || !senha.trim()) {
            setErro('Por favor, preencha todos os campos.');
            return;
        }

        const usuarioLogado = USUARIOS_MOCK.find(u => 
            u.usuario === usuario.trim() && u.senha === senha.trim()
        );

        if (usuarioLogado) {
            alert(`Bem-vindo, ${usuarioLogado.usuario}!\nSeu perfil é: ${usuarioLogado.perfil}`);
            // Aqui seria o redirecionamento para o dashboard
        } else {
            setErro('Usuário ou senha inválidos. Tente novamente.');
            setSenha('');
        }
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <h2>Acesso ao Sistema</h2>
            </div>

            {erro && <div id="error-container" className="error-message visible">{erro}</div>}

            <form id="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="usuario">Usuário ou E-mail</label>
                    <input 
                        type="text" 
                        id="usuario" 
                        name="usuario" 
                        placeholder="Digite seu usuário" 
                        autoComplete="username"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="senha">Senha</label>
                    <input 
                        type="password" 
                        id="senha" 
                        name="senha" 
                        placeholder="Digite sua senha" 
                        autoComplete="current-password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn-primary">Entrar</button>

                <button 
                    type="button" 
                    className="forgot-password link-button" 
                    onClick={() => onNavigate('redefinir')}
                    style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', textDecoration: 'underline', cursor: 'pointer', display: 'block', margin: '10px auto' }}
                >
                    Esqueci minha senha
                </button>

                <button 
                    type="button" 
                    className="forgot-password link-button" 
                    onClick={() => onNavigate('cadastro')}
                    style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', textDecoration: 'underline', cursor: 'pointer', display: 'block', margin: '10px auto' }}
                >
                    Cadastrar-se
                </button>
            </form>
        </div>
    );
};

export default Login;
