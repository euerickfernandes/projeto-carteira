/*
  Warnings:

  - You are about to drop the column `occurredAt` on the `FinancialTransaction` table. All the data in the column will be lost.
  - Made the column `description` on table `FinancialTransaction` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "FinancialTransaction" DROP COLUMN "occurredAt",
ADD COLUMN     "paidAt" TIMESTAMP(3),
ALTER COLUMN "description" SET NOT NULL;
