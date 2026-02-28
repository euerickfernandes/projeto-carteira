'use server'

import { updateFinancialAccount } from "@/app/data-access/financialAccount";
import { currencyToNumber } from "@/app/lib/format";
import { revalidatePath } from "next/cache";

export async function editAccountAction(previousState: any, formData: FormData) {
    console.log('🔁 ACTION - EDIT FINANCIAL ACCOUNT');

    const id = formData.get('id') as string;

    const initialAmount = formData.get('initialAmount') as string;
    const name = formData.get('name') as string;

    await updateFinancialAccount(id, {
        initialAmount: currencyToNumber(initialAmount),
        name: name,
    });

    revalidatePath(`/contas/${id}`);
    revalidatePath(`/contas`);
}