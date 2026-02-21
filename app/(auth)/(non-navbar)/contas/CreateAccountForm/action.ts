'use server'

import { createFinancialAccount } from "@/app/data-access/financialAccount";
import { getUserCount, getUsers } from "@/app/data-access/user";
import { currencyToNumber } from "@/app/lib/format";
import { Decimal } from "@prisma/client/runtime/library";
import { randomInt } from "crypto";
import { revalidatePath } from "next/cache";

export async function createAccountAction(previousState: any, formData: FormData){
    console.log('🔁 ACTION - CREATE FINANCIAL ACCOUNT');
    
    const initialAmount = formData.get('initialAmount') as string;
    const name = formData.get('name') as string;

    console.log(initialAmount, name);

    const randomIndex = randomInt(await getUserCount());
    const user = (await getUsers())[randomIndex];

    await createFinancialAccount({
       initialAmount: currencyToNumber(initialAmount),
       name: name,
       user: { connect: user }
    });

    revalidatePath('/contas');
    revalidatePath('/');
}