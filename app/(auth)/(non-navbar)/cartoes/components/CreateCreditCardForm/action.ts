'use server'

import { createFinancialAccount } from "@/app/data-access/financialAccount";
import { getUserCount, getUsers } from "@/app/data-access/user";
import { currencyToNumber } from "@/app/lib/format";
import { randomInt } from "crypto";
import { revalidatePath } from "next/cache";

export async function createCreditCardAction(previousState: any, formData: FormData){
    console.log('🔁 ACTION - CREATE CREDIT CARD');
    
    const limit = formData.get('limit') as string;
    const closesAt = formData.get('closesAt') as string;
    const expiresAt = formData.get('expiresAt') as string;
    const name = formData.get('name') as string;

    const randomIndex = randomInt(0, await getUserCount());
    const user = (await getUsers())[randomIndex];

    await createFinancialAccount({
       closesAt: Number(closesAt),
       expiresAt: Number(expiresAt),
       initialAmount: 0,
       limit: currencyToNumber(limit),
       name: name,
       user: { connect: user }
    });

    revalidatePath('/cartoes');
    revalidatePath('/');

    return { success: true }
}