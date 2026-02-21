import Stack from "@/app/ui/Flexbox/Stack";
import SignUpForm from "./SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Criar Conta",
};

export default async function Page() {
    console.log('📃 PAGE - CADASTRO');

    return (
        <>
            <Stack>
                <h1>Criar Conta</h1>
                <p><b>Insira seus dados para continuar</b></p>
            </Stack>

            <SignUpForm />
        </>
    );
}