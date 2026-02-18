import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getFinancialTransactionCategory(id: string){
    return await prisma.financialTransactionCategory.findFirst({ where: { id: id } });
}

export async function getFinancialTransactionCategorys(){
    return await prisma.financialTransactionCategory.findMany({});
}

export async function createFinancialTransactionCategory(financialTransactionCategory: Prisma.FinancialTransactionCategoryCreateInput){
    return await prisma.financialTransactionCategory.create({
        data: financialTransactionCategory
    });
}