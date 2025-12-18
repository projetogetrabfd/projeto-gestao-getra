// ==========================================================================
// FUNÇÕES AUXILIARES
// ==========================================================================

/**
 * Exibe mensagem de sucesso ou erro na tela
 * @param {string} mensagem - Texto da mensagem
 * @param {string} tipo - 'success' ou 'error'
 */
function exibirMensagem(mensagem, tipo) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.textContent = mensagem;
    messageContainer.className = `message-container ${tipo}`;
    
    // Rola suavemente até a mensagem para garantir que o usuário veja
    messageContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * Limpa as mensagens da tela
 */
function limparMensagem() {
    const messageContainer = document.getElementById('message-container');
    messageContainer.textContent = '';
    messageContainer.className = 'message-container';
}

// ==========================================================================
// LÓGICA PRINCIPAL
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.getElementById('cadastro-form');

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(event) {
            event.preventDefault();
            limparMensagem();

            // Captura dos valores
            const nomeInput = document.getElementById('nome').value.trim();
            const emailInput = document.getElementById('email').value.trim();
            const senhaInput = document.getElementById('senha').value;
            const confirmarSenhaInput = document.getElementById('confirmar-senha').value;

            // 1. Validação de campos vazios
            if (!nomeInput || !emailInput || !senhaInput || !confirmarSenhaInput) {
                exibirMensagem('Por favor, preencha todos os campos.', 'error');
                return;
            }

            // 2. Validação de igualdade das senhas
            if (senhaInput !== confirmarSenhaInput) {
                exibirMensagem('As senhas não coincidem. Tente novamente.', 'error');
                // Limpa os campos de senha para o usuário digitar novamente
                document.getElementById('senha').value = '';
                document.getElementById('confirmar-senha').value = '';
                document.getElementById('senha').focus();
                return;
            }

            // 3. Validação básica de tamanho de senha (opcional, mas boa prática)
            if (senhaInput.length < 6) {
                exibirMensagem('A senha deve ter pelo menos 6 caracteres.', 'error');
                return;
            }

            // 4. Simulação de Cadastro (Processo Assíncrono Fake)
            const botaoSubmit = cadastroForm.querySelector('button[type="submit"]');
            
            // Estado de "Cadastrando..."
            botaoSubmit.disabled = true;
            botaoSubmit.textContent = 'Cadastrando...';

            setTimeout(() => {
                // Feedback de Sucesso
                exibirMensagem(
                    'Cadastro realizado com sucesso! Redirecionando para o login...',
                    'success'
                );

                // Restaura o botão (embora vá redirecionar logo em seguida)
                botaoSubmit.textContent = 'Sucesso!';
                
                // 5. Redirecionamento após sucesso
                setTimeout(() => {
                    // Caminho relativo para voltar à tela de login (sobe um nível)
                    window.location.href = '../login.html';
                }, 2000); // 2 segundos de espera

            }, 1500); // Simula 1.5s de delay de rede
        });
    }
});
