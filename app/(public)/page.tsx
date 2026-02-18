import Link from "next/link";

export default function Page() {
    console.log('📃 PAGE - HOME');

    return (
        <>
            <h1>Projeto Carteira</h1>
            <p>Monitoramento, controle e planejamento para finanças pessoais.</p>

            <h2>(public)</h2>
            <Link href="/login">Entrar</Link>
            <Link href="/cadastro">Criar Conta</Link>

            <h2>(protected)</h2>
            <Link href="/cartoes">Dashboard</Link>
            <Link href="/contas">Contas</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/investimentos">Investimentos</Link>
            <Link href="/objetivos">Objetivos</Link>
            <Link href="/perfil">Perfil</Link>
            <Link href="/transacoes">Transações</Link>
        </>
    );
}