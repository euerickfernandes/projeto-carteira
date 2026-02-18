import Stack from "@/app/ui/Flexbox/Stack";
import LoginForm from "./LoginForm";

export default function Page() {
    console.log('📃 PAGE - LOGIN');
    return (
        <>
            <Stack>
                <h1>Projeto Carteira</h1>
                <p>Controle, monitoramento e planejamento de finanças pessoais</p>
            </Stack>

            <LoginForm />
        </>
    );
}