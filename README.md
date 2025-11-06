# Projeto de Gestão Financeira - Getra

Este repositório contém o código-fonte completo do projeto, dividido em:

* `backend`: O **Backend (API)** em Node.js, Express e Prisma.
* `frontend`: O **Frontend (Aplicação Web)** em React e Vite.

---

## Backend 

### 1. Pré-requisito Específico

* [PostgreSQL](https://www.postgresql.org/download/) (um banco de dados rodando localmente ou em um serviço de cloud como [Neon](https://neon.tech/) ou [Supabase](https://supabase.com/)).

### 2. Navegação e Instalação

1.  Abra seu terminal na raiz do projeto e navegue para a pasta do backend:
    ```bash
    cd gestao-getra
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

### 3. Configuração do Ambiente

1.  Este projeto usa o Prisma e precisa de um banco PostgreSQL.
2.  Crie uma cópia do arquivo `.env.example`:
    ```bash
    cp .env.example .env
    ```
3.  Abra o arquivo `.env` (que você acabou de criar) e **preencha a `DATABASE_URL`** com os dados da sua conexão do PostgreSQL.

### 4. Rodando a Aplicação (Desenvolvimento)

1.  Para rodar o servidor em modo de desenvolvimento (com auto-restart):
    ```bash
    npm run dev
    ```
2.  O servidor do backend estará rodando em `http://localhost:3000`.

---

## Frontend (React + Vite)

**Importante:** O frontend precisa que o [Backend (backend)](#-backend-gestao-getra) esteja rodando ao mesmo tempo para funcionar corretamente.

### 1. Navegação e Instalação

1.  Abra um **novo terminal**, na raiz do projeto, e navegue para a pasta do frontend:
    ```bash
    cd frontend
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

### 3. Configuração do Ambiente

1.  Crie uma cópia do arquivo de ambiente de exemplo:
    ```bash
    cp .env.example .env
    ```
2.  O arquivo `.env` já deve estar configurado corretamente (`VITE_API_URL=http://localhost:3000`) para o desenvolvimento local.

### 4. Rodando a Aplicação (Desenvolvimento)

1.  Execute o servidor de desenvolvimento do Vite:
    ```bash
    npm run dev
    ```
2.  O servidor do frontend irá iniciar (geralmente em `http://localhost:5173`) e abrirá automaticamente no seu navegador.
