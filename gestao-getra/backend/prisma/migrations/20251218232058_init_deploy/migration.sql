-- CreateEnum
CREATE TYPE "Periodicidade" AS ENUM ('MENSAL', 'ANUAL');

-- CreateEnum
CREATE TYPE "StatusRecorrencia" AS ENUM ('ATIVA', 'PAUSADA', 'CANCELADA');

-- CreateEnum
CREATE TYPE "StatusFatura" AS ENUM ('PENDENTE', 'PAGA', 'VENCIDA');

-- CreateEnum
CREATE TYPE "TipoPagamentoPreferencial" AS ENUM ('BOLETO', 'PIX');

-- CreateEnum
CREATE TYPE "StatusNotaFiscal" AS ENUM ('PENDENTE', 'EMITIDA', 'CANCELADA', 'ERRO');

-- CreateEnum
CREATE TYPE "FormaPagamento" AS ENUM ('PIX', 'TRANSFERENCIA', 'BOLETO');

-- CreateEnum
CREATE TYPE "StatusContaPagar" AS ENUM ('PENDENTE', 'PAGA', 'VENCIDA');

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome_razao_social" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "telefone" VARCHAR(20) NOT NULL,
    "endereco_completo" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servico" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" TEXT,
    "valor_padrao" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perfil" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "permissoes" TEXT NOT NULL,

    CONSTRAINT "Perfil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "id_perfil" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha_hash" VARCHAR(255) NOT NULL,
    "ativo" BOOLEAN NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parceiro" (
    "id" SERIAL NOT NULL,
    "nome_razao_social" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "email_contato" VARCHAR(100) NOT NULL,
    "dados_bancarios_pix" TEXT,

    CONSTRAINT "Parceiro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recorrencia" (
    "id" SERIAL NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "id_servico" INTEGER NOT NULL,
    "valor_cobrado" DECIMAL(65,30) NOT NULL,
    "periodicidade" "Periodicidade" NOT NULL,
    "dia_vencimento" INTEGER NOT NULL,
    "status" "StatusRecorrencia" NOT NULL,

    CONSTRAINT "Recorrencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fatura" (
    "id" SERIAL NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "id_recorrencia" INTEGER,
    "id_usuario_criador" INTEGER,
    "valor_total" DECIMAL(65,30) NOT NULL,
    "data_vencimento" TIMESTAMP(3) NOT NULL,
    "data_pagamento" TIMESTAMP(3),
    "status" "StatusFatura" NOT NULL,
    "tipo_pagamento_preferencial" "TipoPagamentoPreferencial",
    "id_externo_gateway" VARCHAR(255),
    "linha_digitavel_boleto" TEXT,
    "link_qr_code_pix" TEXT,

    CONSTRAINT "Fatura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContaPagar" (
    "id" SERIAL NOT NULL,
    "id_parceiro" INTEGER NOT NULL,
    "id_usuario_lancamento" INTEGER NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "data_vencimento" TIMESTAMP(3) NOT NULL,
    "data_pagamento" TIMESTAMP(3),
    "forma_pagamento" "FormaPagamento" NOT NULL,
    "status" "StatusContaPagar" NOT NULL,

    CONSTRAINT "ContaPagar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotaFiscal" (
    "id" SERIAL NOT NULL,
    "id_fatura" INTEGER NOT NULL,
    "numero" INTEGER NOT NULL,
    "data_emissao" TIMESTAMP(3) NOT NULL,
    "valor_total" DECIMAL(65,30) NOT NULL,
    "status_api" "StatusNotaFiscal" NOT NULL,
    "id_externo_api" TEXT,
    "link_xml" TEXT,
    "link_pdf" TEXT,

    CONSTRAINT "NotaFiscal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transacao" (
    "id" SERIAL NOT NULL,
    "id_fatura" INTEGER NOT NULL,
    "data_hora" TIMESTAMP(3) NOT NULL,
    "evento" VARCHAR(100) NOT NULL,
    "tipo_notificacao_api" TEXT,
    "dados_resposta" JSONB,

    CONSTRAINT "Transacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpf_cnpj_key" ON "Cliente"("cpf_cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Parceiro_cpf_cnpj_key" ON "Parceiro"("cpf_cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "NotaFiscal_id_fatura_key" ON "NotaFiscal"("id_fatura");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_id_perfil_fkey" FOREIGN KEY ("id_perfil") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recorrencia" ADD CONSTRAINT "Recorrencia_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recorrencia" ADD CONSTRAINT "Recorrencia_id_servico_fkey" FOREIGN KEY ("id_servico") REFERENCES "Servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fatura" ADD CONSTRAINT "Fatura_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fatura" ADD CONSTRAINT "Fatura_id_recorrencia_fkey" FOREIGN KEY ("id_recorrencia") REFERENCES "Recorrencia"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fatura" ADD CONSTRAINT "Fatura_id_usuario_criador_fkey" FOREIGN KEY ("id_usuario_criador") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContaPagar" ADD CONSTRAINT "ContaPagar_id_parceiro_fkey" FOREIGN KEY ("id_parceiro") REFERENCES "Parceiro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContaPagar" ADD CONSTRAINT "ContaPagar_id_usuario_lancamento_fkey" FOREIGN KEY ("id_usuario_lancamento") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotaFiscal" ADD CONSTRAINT "NotaFiscal_id_fatura_fkey" FOREIGN KEY ("id_fatura") REFERENCES "Fatura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transacao" ADD CONSTRAINT "Transacao_id_fatura_fkey" FOREIGN KEY ("id_fatura") REFERENCES "Fatura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
