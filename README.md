# Sistema de Gestão - GETRA

## Resumo Geral da última atualização:
Neste período, o foco foi transformar o front-end em um sistema funcional conectado ao banco de dados, implementar segurança no Login/Cadastro (com criptografia), corrigir o fluxo de Upload de Notas Fiscais e ajustar a arquitetura do banco de dados para suportar múltiplos perfis (Admin, Financeiro e Cliente).

---

## Backend (Node.js & Prisma)

### 1. Autenticação e Segurança (`src/controllers/authController.js`)
* **Criptografia:** Implementação do **`bcryptjs`** para hash de senhas.
* **Login Inteligente:** Adicionada lógica que busca automaticamente o vínculo entre a tabela `Usuario` e a tabela `Cliente` através do e-mail.
* **Correção de Perfil:** Ajuste no cadastro para criar/vincular automaticamente o usuário ao perfil "CLIENTE" (tabela `Perfil`), resolvendo erro de *missing relation*.
* **Campos Obrigatórios:** Inclusão de `ativo: true` e `senha_hash` no fluxo de criação.

### 2. Processamento de Notas (`src/controllers/notaController.js`)
* **Leitura de PDF:** Implementação da biblioteca **`pdf-parse`** para extrair automaticamente o valor total do PDF.
* **Upload:** Configuração do recebimento via `multer` na pasta `/uploads`.
* **Correção de Enums:** Ajuste do status da nota para `'EMITIDA'` (compatível com o Prisma Schema).
* **Controller Unificado:** Consolidação das funções `upload`, `listar` e `deletar` em um único arquivo.

### 3. Faturas (`src/controllers/faturaController.js`)
* **Inclusão de Descrição:** Adicionado suporte para salvar descrição personalizada (ex: Nome do Serviço) na fatura.
* **Join Duplo:** Ajuste no método `listar` para trazer dados aninhados (`Fatura -> Recorrencia -> Servico`).

### 4. Rotas (`src/routes.js`)
* Correção da rota de upload para: `POST /notas/upload`.
* Padronização do nome do campo de arquivo para `'arquivo'`.
* Conexão correta de todos os controllers (Auth, Nota, Fatura, Cliente).

### 5. Banco de Dados & Seed (`prisma/schema.prisma` e `prisma/seed.js`)
* **Schema:** Adicionado campo `descricao` na tabela `Fatura`.
* **Seed:** Script (`npx prisma db seed`) para garantir a existência dos perfis (Admin, Financeiro, Cliente) e criar usuários padrão (`admin@getra.com`, `financeiro@getra.com`).

---

## Frontend (React)

### 1. Dashboard do Cliente (`src/pages/Dashboard/DashboardCliente.jsx`)
* **Integração Real:** Consumo da API `/faturas`.
* **Filtro de Segurança:** Exibe apenas as faturas do ID do Cliente logado (usando o vínculo `dadosCliente`).
* **Visualização:** Lógica para extrair e exibir o nome do serviço (via recorrência ou descrição manual).

### 2. Upload de Notas (`src/telaNotas/NotasFiscais.jsx`)
* **Anti-Crash:** Adicionada verificação `if (!user)` para impedir tela branca antes do carregamento do perfil.
* **Lógica Dual:**
    * **Admin:** Select obrigatório para escolher o cliente.
    * **Cliente:** Detecção automática do ID vinculado.
* **Correção de ID:** Correção do envio de `user.id` para `cliente.id`, resolvendo erro de *Foreign Key*.
* **Limpeza Segura:** Uso de `key={Date.now()}` no input de arquivo para resetar o formulário sem manipulação direta do DOM.

### 3. Cadastro e Login
* **Cadastro:** Ajuste para enviar todos os campos para a nova rota de registro.
* **Login:** Armazenamento do objeto `dadosCliente` no `localStorage`.

---

## Instruções de Atualização

Para rodar o projeto com essas alterações em um novo ambiente:

1. **Instalar dependências novas:**
   ```bash
   cd backend
   npm install bcryptjs pdf-parse
   ```

2. **Atualizar Banco de Dados:**

   ```bash
   npx prisma db push
   ```

3. Popular Banco (Seed):

   ```bash
    npx prisma db seed
   ```
4. Rodar Backend e Frontend (nas suas devidas pastas):
   ```
    npm start + npm run dev
