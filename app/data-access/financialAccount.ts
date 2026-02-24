import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function createFinancialAccount(financialAccount: Prisma.FinancialAccountCreateInput){
    console.log('💾 DAL CREATE FINANCIAL ACCOUNT');

    return await prisma.financialAccount.create({ data: financialAccount });
}

export async function getFinancialAccount(financialAccountId: string){
    console.log('💾 DAL GET FINANCIAL ACCOUNT');

    return await prisma.financialAccount.findUnique({ where: { id: financialAccountId } });
}

export async function getFinancialAccounts(){
    console.log('💾 DAL GET FINANCIAL ACCOUNTS');

    return await prisma.financialAccount.findMany({ orderBy: { name: 'asc' } });
}

export async function getFinancialAccountsCount(){
    console.log('💾 DAL GET FINANCIAL ACCOUNTS COUNT');

    return await prisma.financialAccount.count();
}

export async function getFinancialAccountTotalBalance(id: string){
    console.log('💾 DAL GET FINANCIAL ACCOUNT TOTAL BALANCE');

    return (await prisma.financialAccount.findUnique({ where: { id: id } }))?.initialAmount;
}

export async function getFinancialAccountsTotalBalance(userId: string){
    console.log('💾 DAL GET FINANCIAL ACCOUNTS TOTAL BALANCE');

    return (await prisma.financialAccount.aggregate({
        where: { user: { id: userId } },
        _sum: { initialAmount: true }
    }))._sum.initialAmount;
}

export async function updateFinancialAccount(id: string, data: Prisma.FinancialAccountUpdateInput){
    console.log('💾 DAL UPDATE FINANCIAL ACCOUNT');

    return await prisma.financialAccount.update({
        data: data,
        where: { id: id }
    });
}