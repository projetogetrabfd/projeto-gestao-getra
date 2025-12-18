// ==========================================================================
// CONFIGURAÇÃO DE USUÁRIOS MOCKADOS (SIMULAÇÃO DE BANCO DE DADOS)
// ==========================================================================
const USUARIOS_MOCK = [
    { usuario: 'admin', senha: '123', perfil: 'Administrador' },
    { usuario: 'financeiro', senha: '123', perfil: 'Financeiro' },
    { usuario: 'diretor', senha: '123', perfil: 'Diretor' }
];

// ==========================================================================
// FUNÇÕES AUXILIARES
// ==========================================================================

/**
 * Função para exibir mensagens de erro na tela
 * @param {string} mensagem - O texto do erro a ser exibido
 */
function exibirErro(mensagem) {
    const errorContainer = document.getElementById('error-container');
    errorContainer.textContent = mensagem;
    errorContainer.classList.add('visible');
}

/**
 * Função para limpar mensagens de erro
 */
function limparErro() {
    const errorContainer = document.getElementById('error-container');
    errorContainer.textContent = '';
    errorContainer.classList.remove('visible');
}

/**
 * Simula a autenticação verificando as credenciais no array de mocks
 * @param {string} usuarioInput - Usuário ou E-mail digitado
 * @param {string} senhaInput - Senha digitada
 * @returns {object|null} - Retorna o objeto do usuário se encontrado, ou null se falhar
 */
function autenticarUsuario(usuarioInput, senhaInput) {
    // Busca o usuário que corresponda ao login e senha
    const usuarioEncontrado = USUARIOS_MOCK.find(u => 
        u.usuario === usuarioInput && u.senha === senhaInput
    );
    return usuarioEncontrado || null;
}

// ==========================================================================
// LÓGICA PRINCIPAL (EVENT LISTENER)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Previne o comportamento padrão de recarregar a página
            event.preventDefault();
            
            // Limpa erros anteriores
            limparErro();

            // Captura os valores dos campos
            const usuarioInput = document.getElementById('usuario').value.trim();
            const senhaInput = document.getElementById('senha').value.trim();

            // 1. Validação de campos vazios
            if (!usuarioInput || !senhaInput) {
                exibirErro('Por favor, preencha todos os campos.');
                return;
            }

            // 2. Simulação de Autenticação
            const usuarioLogado = autenticarUsuario(usuarioInput, senhaInput);

            if (usuarioLogado) {
                // Login bem-sucedido
                console.log(`Login realizado com sucesso! Perfil: ${usuarioLogado.perfil}`);
                
                // Feedback visual para o usuário (Simulando redirecionamento)
                alert(`Bem-vindo, ${usuarioLogado.usuario}!\nSeu perfil é: ${usuarioLogado.perfil}\n\n(Redirecionando para o painel...)`);
                
                // AQUI SERIA O REDIRECIONAMENTO REAL:
                // window.location.href = '/dashboard.html';
                
                // Limpa o formulário (opcional, já que vai redirecionar)
                loginForm.reset();
            } else {
                // Login inválido
                exibirErro('Usuário ou senha inválidos. Tente novamente.');
                // Limpa o campo de senha por segurança
                document.getElementById('senha').value = '';
                document.getElementById('senha').focus();
            }
        });
    }
});
