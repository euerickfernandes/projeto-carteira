import Link from "next/link";

export default function Page() {
    console.log('📃 PAGE - DASHBOARD');

    return (
        <>
            <h1>Dashboard</h1>

            <Link href="/perfil">Perfil</Link>
        </>
    );
}
