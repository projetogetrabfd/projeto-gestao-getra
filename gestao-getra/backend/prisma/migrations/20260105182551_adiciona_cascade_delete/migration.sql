-- DropForeignKey
ALTER TABLE "NotaFiscal" DROP CONSTRAINT "NotaFiscal_id_fatura_fkey";

-- AddForeignKey
ALTER TABLE "NotaFiscal" ADD CONSTRAINT "NotaFiscal_id_fatura_fkey" FOREIGN KEY ("id_fatura") REFERENCES "Fatura"("id") ON DELETE CASCADE ON UPDATE CASCADE;
