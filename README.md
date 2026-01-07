# Projeto Gestão Getra 

Este repositório contém o código fonte do sistema de gestão financeira para a empresa GETRA.

## Novidades da Versão 
Foi implementado um fluxo completo de automação para entrada de notas fiscais de serviço (NFS-e). O objetivo é reduzir o trabalho manual de cadastro de contas a pagar.

### Funcionalidades Implementadas

- **Leitura de PDF (Parsing):** O sistema agora aceita upload de arquivos PDF de notas fiscais.
- **Extração Inteligente (OCR/Regex):** Extração automática de dados chave do arquivo via backend:
  - CNPJ do Emitente
  - Número da Nota
  - Data de Emissão
  - Valor Total
- **Associação Automática:** Busca automática do Cliente no banco de dados através do CNPJ extraído do PDF.
- **Geração de Fatura e Nota:** Ao confirmar a importação, o sistema cria automaticamente em uma única transação:
  1. Uma **Fatura** (Contas a Pagar) vinculada ao Cliente encontrado.
  2. Uma **Nota Fiscal** vinculada a essa Fatura.
- ** Exclusão em Cascata:** Configuração do banco de dados para permitir a exclusão de Faturas removendo automaticamente suas Notas Fiscais atreladas (`onDelete: Cascade`), evitando erros de integridade.

---

##  Tecnologias e Bibliotecas Chave

- **Backend:** Node.js + Express
- **Banco de Dados:** PostgreSQL + Prisma ORM
- **Leitura de PDF:** `pdf-parse` (Versão 1.1.1 - *Estável*)
- **Upload:** Multer
- **Frontend:** React + Axios

---

##  Correções e Ajustes Técnicos Realizados

Durante o desenvolvimento deste módulo, foram realizadas as seguintes correções críticas:

### 1. Biblioteca `pdf-parse` (Fix de Versão)
Houve um ajuste crítico na versão da biblioteca de leitura de PDF para garantir compatibilidade com o fluxo de extração de texto.
- **Problema Anterior:** Versões instáveis (`^2.4.5`) retornavam Objetos complexos incompatíveis com a função de leitura direta.
- **Solução:** Downgrade forçado para a versão estável `1.1.1`.
- **Instalação correta:**
  ```bash
  npm install pdf-parse@1.1.1
