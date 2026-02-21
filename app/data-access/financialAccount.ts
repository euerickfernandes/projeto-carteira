import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getFinancialAccount(financialAccountId: string){
    console.log('💾 DAL GET FINANCIAL ACCOUNT')

    return await prisma.financialAccount.findUnique({ where: { id: financialAccountId } });
}

export async function getFinancialAccounts(){
    console.log('💾 DAL GET FINANCIAL ACCOUNTS')

    return await prisma.financialAccount.findMany({});
}

export async function getFinancialAccountsCount(){
    console.log('💾 DAL GET FINANCIAL ACCOUNTS COUNT')

    return await prisma.financialAccount.findMany({});
}

export async function createFinancialAccount(financialAccount: Prisma.FinancialAccountCreateInput){
    console.log('💾 DAL CREATE FINANCIAL ACCOUNT')

    return await prisma.financialAccount.create({ data: financialAccount });
}