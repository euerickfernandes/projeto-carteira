import Button from "@/app/ui/Button";
import Link from "next/link";

export default function Page() {
    console.log('📃 PAGE - PERFIL');
    
    return (
        <>
            <h1>Perfil</h1>

            <Link href="/login">
                <Button fillWidth variant="secondary">Sair</Button>
            </Link>
        </>
    );
}
