-- DropForeignKey
ALTER TABLE "Transacao" DROP CONSTRAINT "Transacao_id_fatura_fkey";

-- AddForeignKey
ALTER TABLE "Transacao" ADD CONSTRAINT "Transacao_id_fatura_fkey" FOREIGN KEY ("id_fatura") REFERENCES "Fatura"("id") ON DELETE CASCADE ON UPDATE CASCADE;
