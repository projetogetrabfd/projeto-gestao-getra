# Sistema de Gestão - GETRA

## Resumo Geral da última atualização:

O foco foi a implementação do módulo de **Relatórios Gerenciais**, permitindo que administradores extraiam dados estratégicos do sistema. Foi desenvolvida uma rotina de geração de PDF no backend (com cálculos financeiros e estatísticos) e criado o fluxo de download seguro no frontend na tela de Análise.

---

### Backend (Node.js & Prisma)

#### 1. Geração de PDF (`src/controllers/relatorioController.js`)

* **Biblioteca PDFKit:** Implementação do `pdfkit` para desenhar o relatório vetorialmente (não é HTML convertido, é PDF nativo).
* **Agregação de Dados:** Uso de `prisma.aggregate` e `_sum` para calcular totais de faturas Pagas, Pendentes e Vencidas diretamente do banco de dados.
* **Correção Numérica:** Implementação de tratamento de tipagem (`Number()`) para evitar erros de concatenação de strings nos cálculos de soma total vinda do Prisma.
* **Indicadores:** Criação de algoritmo para cálculo percentual (KPIs) de inadimplência e recebimentos.
* **Design:** Layout profissional com cabeçalho, data de geração automática e indicadores visuais coloridos (Verde/Amarelo/Vermelho).

#### 2. Rotas e Segurança (`src/routes/index.js`)

* **Nova Rota:** Criação do endpoint `GET /relatorios/geral`.
* **Proteção de Rota:** Aplicação dos middlewares `authenticateToken` e `requireAdminMaster`. Apenas usuários com nível "MASTER" podem gerar este documento sensível.

---

### Frontend (React)

#### 1. Tela de Análise (`src/telaAnalise/Analise.jsx`)

* **Botão de Exportação:** Inclusão do botão "Gerar Relatório (PDF)" no cabeçalho da página.
* **Controle de Acesso Visual:** Lógica condicional `usuario.role === "ADMIN_MASTER"` para renderizar o botão apenas para quem tem permissão de administrador master.
* **Manipulação de Blob:** Configuração do `axios` com `responseType: 'blob'` para receber o arquivo binário do backend e forçar o download automático no navegador.

---

### Instruções de Atualização

Para rodar o projeto com essas alterações em um novo ambiente:

1.  **Instalar dependência de PDF no Backend:**
    Acesse a pasta do servidor e instale o pacote:
    ```bash
    cd backend
    npm install pdfkit
    ```

2.  **Reiniciar o Servidor:**
    Como houve alteração nas rotas e instalação de novos pacotes, é necessário reiniciar o processo do Node.js:
