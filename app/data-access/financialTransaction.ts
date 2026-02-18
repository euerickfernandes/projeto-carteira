import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function createFinancialTransaction(financialTransaction: Prisma.FinancialTransactionCreateInput) {
    console.log('💾 DAL CREATE FINANCIAL TRANSACTION');

    return await prisma.financialTransaction.create({
        data: financialTransaction
    });
}


export async function getFinancialTransactions() {
    console.log('💾 DAL GET FINANCIAL TRANSACTIONS');

    return await prisma.financialTransaction.findMany({
        include: {
            destinationAccount: true,
            sourceAccount: true,
            category: true,
            goal: true,
            investiment: true,
        },

        orderBy: [{ createdAt: 'desc' }]
    });
}