# 🟢 GETRA - Sistema de Gestão Financeira

> **Status do Projeto:** 🚀 Concluído (Versão 1.0)

O **GETRA** é uma plataforma Full Stack de gestão financeira e controle de clientes, desenvolvida sob medida para otimizar processos de contas a receber, emissão de faturas e pagamentos via PIX.

Este projeto foi desenvolvido como **Produto Final** do programa **Bolsa Futuro Digital**, uma iniciativa da **Softex-PE** para capacitação em desenvolvimento de software.

---

## 🖼️ Sobre o Projeto

O objetivo foi criar uma solução real para a empresa **GETRA**, substituindo processos manuais por um sistema web integrado. O sistema permite que administradores gerenciem o fluxo de caixa e que clientes acessem um portal exclusivo para realizar pagamentos.

### 🌟 Funcionalidades Principais

**Para a Administração (Gestores):**
* **Dashboard Operacional:** Visão geral com KPIs, gráficos de receita e inadimplência.
* **Gestão de Clientes:** Cadastro completo (CRUD) e histórico.
* **Controle de Faturas:** Emissão de cobranças, monitoramento de vencimentos e baixa manual.
* **Análise de Notas:** Upload e verificação de documentos fiscais.

**Para o Cliente (Portal):**
* **Área Exclusiva:** Acesso via login seguro.
* **Pagamento Simplificado:** Seleção de faturas pendentes e geração automática de **QR Code PIX** (Integração Mercado Pago).
* **Histórico:** Visualização de pagamentos realizados.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando uma arquitetura moderna e escalável:

### **Frontend**
* ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) **React.js (Vite)**
* **Axios** (Consumo de API)
* **CSS Modules / Styled Components** (Estilização)
* **Chart.js** (Visualização de dados)

### **Backend**
* ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) **Node.js**
* ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) **Express**
* **Prisma ORM** (Modelagem e acesso ao banco)
* **JWT & Bcrypt** (Autenticação e Segurança)
* **Mercado Pago SDK** (Gateway de Pagamentos)

### **Banco de Dados & Infra**
* ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) **PostgreSQL**
* **VPS Linux (Ubuntu)**
* **Prisma**

---

## 👨‍💻 Equipe de Desenvolvimento

Este projeto foi idealizado e construído pela **Equipe 02** do Polo **Campina Grande - PB** (Turma 03 PB - C1).

* **Camila Dornelas**
* **Emely Maria Silva Basilio**
* **Kauã De Araújo Rocha**
* **Luiz Manoel Magalhães da Silveira**
* **Matheus Mendes de Sousa**
* **Militão Araujo Duarte do Rêgo**
* **Pedro Lucas de Brito**

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em sua máquina local.

### Pré-requisitos
* Node.js (v18+)
* PostgreSQL instalado e rodando
* Git

### 1. Clonar o Repositório

```bash
git clone [https://github.com/SEU_USUARIO/NOME_DO_REPO.git](https://github.com/SEU_USUARIO/NOME_DO_REPO.git)
cd NOME_DO_REPO
```

### 2. Configurando o Backend

```bash
cd backend
npm install
```
Crie um arquivo .env na pasta backend com as seguintes variáveis:
### Conexão com o Banco de Dados
```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
```
### Segredo para geração de Tokens JWT
````
JWT_SECRET="sua_chave_secreta_aqui"
````
### Porta do Servidor
````
PORT=2000
````
### Credencial Mercado Pago (Opcional para testes de PIX)
````
ACCESS_TOKEN="seu_access_token_mp"
````
### Em seguida, configure o banco de dados:
### Criar as tabelas
````
npx prisma db push
````

### Popula o banco com usuários iniciais (Admin/Financeiro)
````
npx prisma db seed
````
Inicie o servidor:
````
npm start
````
### O servidor rodará em http://localhost:2000
##3. Configurando o Frontend
### Abra um novo terminal:
````
cd frontend
npm install
````
Inicie a aplicação:
````
npm run dev
````
### O frontend rodará em http://localhost:5173
🔐 Acesso ao Sistema (Dados de Teste)Após rodar o seed, você pode utilizar as seguintes credenciais para teste:PerfilEmailSenhaAdministradoradmin@getra.com123456Financeirofinanceiro@getra.com123456📄 LicençaEste projeto foi desenvolvido para fins educacionais no âmbito do programa Bolsa Futuro Digital. Todos os direitos reservados à equipe de desenvolvimento e à Softex-PE.<p align="center">Feito com 💚 pela Equipe 02 - Campina Grande/PB</p>

