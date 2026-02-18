'use server'

import { createUser } from "@/app/data-access/user";
import { hash } from "@/app/lib/bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

export async function createUserAction(previousState: any, formData: FormData){
    console.log('🔁 ACTION - CREATE USER');
    
    const firstname = formData.get('firstname') as string;
    const lastname = formData.get('lastname') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const hashedPassowd = await hash(password);

    const user = await createUser({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedPassowd,
    });

    console.log(user.firstname);

    // revalidatePath('/');
    redirect(`/`);
}