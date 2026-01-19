# Sistema de Permissões - GETRA

## Roles Definidos

### CLIENTE (Usuário Padrão)
- **Acesso via:** Página do Cliente
- **Permissões:**
  - Dashboard
  - Lançamentos (Upload de Notas Fiscais)
  - Financeiro (Pagamentos)

### FINANCEIRO
- **Permissões:** Todas as telas exceto alteração de roles
-  Dashboard, Clientes, Faturas, Análise, Serviços, Upload NF, Pagamento

### ADMIN_MASTER (Diretoria)
- **Permissões:** Acesso total a todas as funcionalidades
-  Todas as telas + alteração de roles de usuários

## Arquivos Criados

### Backend
- **`src/middleware/authMiddleware.js`**  Middleware de autenticação e verificação de permissões
- **`prisma.config.js`**  Configuração do Prisma para conexão com banco

### Frontend
- **`src/hooks/useAuth.js`** - Hook customizado para gerenciar autenticação e permissões
- **`src/Components/ProtectedRoute.jsx`** - Componente para proteger rotas baseado em roles

## Arquivos Modificados

### Backend
- **`prisma/schema.prisma`**
  - Adicionado enum `Role` com valores: CLIENTE, FINANCEIRO, ADMIN_MASTER
  - Adicionado campo `role` na tabela `Usuario` com valor padrão `CLIENTE`

- **`src/controllers/authController.js`**
  - Login agora retorna `token` e `user` com informações completas incluindo `role`
  - Token temporário usando ID do usuário (produção deve usar JWT)

- **`src/controllers/usuarioController.js`**
  - Implementada validação: apenas `ADMIN_MASTER` pode alterar roles
  - Novo método `alterarRole()` para mudança segura de papéis

### Frontend
- **`src/Components/Sidebar.jsx`**
  - Sidebar inteligente que oculta itens conforme permissão do usuário
  - Exibe role do usuário para identificação visual
  - Usa hook `useAuth()` para verificar permissões dinamicamente

- **`src/App.jsx`**
  - Todas as rotas privadas protegidas com `ProtectedRoute`
  - Validação de role específica por tela
  - Redirecionamento automático para usuários não autorizados

- **`src/telaLogin/Login.jsx`**
  - Corrigido redirecionamento para `/dashboard` após login
  - Salva dados completos do usuário no localStorage

## Como Usar

### 1. Iniciar Servidores
```bash
# Backend
cd gestao-getra/backend
npm run dev

# Frontend  
cd gestao-getra/frontend
npm run dev

# Prisma Studio (visualizar banco)
npx prisma studio
```

### 2. Testar Permissões
- Faça login com diferentes usuários:
  - `adm@getra` → Acesso total
  - `financeiro@getra` → Acesso financeiro completo
  - `cliente@getra` → Acesso básico