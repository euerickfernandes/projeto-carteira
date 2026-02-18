import Link from "next/link";
import Stack from "../ui/Flexbox/Stack";
import { getUserCount } from "../data-access/user";

export default async function Page() {
    console.log('📃 PAGE - HOME');

    const userCount = await getUserCount();

    return (
        <>  
            <Stack>
                <h1>Projeto Carteira</h1>
                <p><b>Monitoramento, controle e planejamento para finanças pessoais.</b></p>
            </Stack>

            <Stack>
                <h2>Projeto em construção</h2>
                <p>Usuários: <b>{ userCount }</b></p>
            </Stack>
        
            <Stack gap="md">
                <h2>Páginas</h2>

                <Stack>
                    <p><b>Públicas</b></p>
                    <Link href="/cadastro">Criar Conta</Link>
                    <Link href="/login">Entrar</Link>
                </Stack>

                <Stack>
                    <p><b>Autenticadas</b></p>
                    <Link href="/contas">Contas</Link>
                    <Link href="/cartoes">Cartões de Crédito</Link>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/investimentos">Investimentos</Link>
                    <Link href="/objetivos">Objetivos</Link>
                    <Link href="/perfil">Perfil</Link>
                    <Link href="/transacoes">Transações</Link>
                </Stack>
            </Stack>
        </>

    );
}