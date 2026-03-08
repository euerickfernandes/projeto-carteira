'use server'

import { updateCreditCard } from "@/app/data-access/creditCard";
import { currencyToNumber } from "@/app/lib/format";
import { revalidatePath } from "next/cache";

export async function editCreditCardAction(previousState: any, formData: FormData) {
    console.log('🔁 ACTION - EDIT CREDIT CARD');

    const id = formData.get('id') as string;

    const limit = formData.get('limit') as string;
    const closesAt = formData.get('closesAt') as string;
    const expiresAt = formData.get('expiresAt') as string;
    const name = formData.get('name') as string;

    await updateCreditCard(id, {
        closesAt: Number(closesAt),
        expiresAt: Number(expiresAt),
        limit: currencyToNumber(limit),
        name: name
    });

    revalidatePath(`/cartoes/${id}`);
    revalidatePath(`/cartoes`);
}