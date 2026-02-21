/*
  Warnings:

  - Added the required column `initialAmount` to the `FinancialAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FinancialAccount" ADD COLUMN     "initialAmount" DECIMAL(65,30) NOT NULL;
