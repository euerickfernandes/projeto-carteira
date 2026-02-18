import Stack from "@/app/ui/Flexbox/Stack";
import LoginForm from "./LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Entrar",
};

export default function Page() {
    console.log('📃 PAGE - LOGIN');
    return (
        <>
            <Stack>
                <h1>Projeto Carteira</h1>
                <p><b>Controle, monitoramento e planejamento de finanças pessoais</b></p>
            </Stack>

            <LoginForm />
        </>
    );
}