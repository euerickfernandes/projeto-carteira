import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function createCreditCard(data: Omit<Prisma.FinancialAccountCreateInput, "initialAmount">){
    console.log('💾 DAL CREATE CREDIT CARD');

    return await prisma.financialAccount.create({ data: { 
            initialAmount: 0,
            ...data
        } 
    });
}

export async function getCreditCard(id: string){
    console.log('💾 DAL GET CREDIT CARD');

    return await prisma.financialAccount.findUnique({ 
        where: { 
            closesAt: { not: null }, 
            expiresAt: { not: null }, 
            id: id,
            limit: { not: null }, 
        } 
     });
}

export async function getCreditCards(){
    console.log('💾 DAL GET CREDIT CARDS');

    return await prisma.financialAccount.findMany({ 
        orderBy: { name: 'asc' },
        where: { 
            closesAt: { not: null }, 
            expiresAt: { not: null }, 
            limit: { not: null }, 
        } 
    });
}

export async function getCreditCardTotalLimit(id: string){
    console.log('💾 DAL GET CREDIT CARD TOTAL LIMIT');

    return (await prisma.financialAccount.findUnique({
        where: { 
            id: id,
            limit: { not: null },
        }
    }))?.limit;
}

export async function getCreditCardsTotalLimit(userId: string){
    console.log('💾 DAL GET CREDIT CARDS TOTAL LIMIT');

    return (await prisma.financialAccount.aggregate({
        where: { 
            limit: { not: null },
            user: { id: userId } 
        },
        _sum: { limit: true }
    }))._sum.limit;
}

export async function getCreditCardsCount(){
    console.log('💾 DAL GET CREDIT CARDS COUNT');

    return await prisma.financialAccount.count({
        where: { 
            closesAt: { not: null }, 
            expiresAt: { not: null }, 
            limit: { not: null }, 
        } 
    });
}

export async function updateCreditCard(id: string, data: Omit<Prisma.FinancialAccountUpdateInput, "initialAmount">){
    console.log('💾 DAL UPDATE CREDIT CARD');

    return await prisma.financialAccount.update({
        data: data,
        where: { id: id }
    });
}