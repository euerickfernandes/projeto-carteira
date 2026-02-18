import Button from "@/app/ui/Button";
import Inline from "@/app/ui/Flexbox/Inline";
import Stack from "@/app/ui/Flexbox/Stack";
import Link from "next/link";

export default async function Page() {
    console.log('📃 PAGE - ONBOARDING');

    return (
        <>
            <Stack>
                <h1>Criar Conta</h1>
                <p>Insira seus dados para continuar</p>
            </Stack>

            <Inline>
                <Button type="submit">Criar Conta</Button>

                <Link href="/login">
                    <Button type="button" variant="secondary">Voltar</Button>
                </Link>
            </Inline>
        </>
    );
}