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
    const redefinirForm = document.getElementById('redefinir-form');

    if (redefinirForm) {
        redefinirForm.addEventListener('submit', function(event) {
            event.preventDefault();
            limparMensagem();

            const emailInput = document.getElementById('email').value.trim();

            // 1. Validação simples de preenchimento
            if (!emailInput) {
                exibirMensagem('Por favor, informe seu e-mail.', 'error');
                return;
            }

            // 2. Simulação de envio (Processo Assíncrono Fake)
            const botaoSubmit = redefinirForm.querySelector('button[type="submit"]');
            
            // Estado de "Enviando..."
            botaoSubmit.disabled = true;
            botaoSubmit.textContent = 'Enviando...';

            setTimeout(() => {
                // 3. Feedback de Sucesso
                exibirMensagem(
                    'Se o e-mail informado estiver cadastrado, você receberá instruções para redefinir sua senha.',
                    'success'
                );

                // Restaura o botão
                botaoSubmit.textContent = 'E-mail enviado!';
                
                // 4. Redirecionamento opcional após alguns segundos
                setTimeout(() => {
                    // Caminho relativo para voltar à tela de login (sobe um nível)
                    window.location.href = '../login.html';
                }, 3000); // 3 segundos de espera

            }, 1500); // Simula 1.5s de delay de rede
        });
    }
});
