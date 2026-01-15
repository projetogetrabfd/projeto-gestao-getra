## Novidades da Versão

Foi implementada a **estrutura inicial de controle de acesso (permissões)**, permitindo que o sistema se comporte de forma diferente conforme o tipo de usuário logado.

O objetivo é garantir **organização, segurança e escalabilidade**, mesmo antes da integração com banco de dados e autenticação real.

---

## Sistema de Permissões (Roles)

O sistema trabalha com três níveis de acesso:

- **ADMIN (Diretoria)**
- **FINANCEIRO**
- **CLIENTE**

As permissões controlam **o que o usuário pode visualizar e acessar**, principalmente no menu lateral (sidebar).

### Visibilidade por perfil

**ADMIN**
- Dashboard
- Análise
- Serviços

**FINANCEIRO**
- Dashboard
- Clientes
- Faturas

**CLIENTE**
- Dashboard
- Upload de Nota Fiscal
- Pagamentos
 Itens sem permissão **não aparecem na interface**.

---

## Autenticação Simulada (Mock)

Como o projeto ainda **não possui banco de dados nem JWT**, foi criado um middleware de autenticação simulada para permitir usar o sistema inicialmente completos do sistema.

Arquivo:

Esse middleware:
- Injeta manualmente `id`, `nome` e `role`

### Testar diferentes permissões

Para alterar a permissão do usuário, modifique **apenas este arquivo**:

gestao-getra/backend/src/middlewares/mockAuth.js

### Para a proxima versão do sistema de permissões
Autenticação real com JWT
Integração com banco de dados
