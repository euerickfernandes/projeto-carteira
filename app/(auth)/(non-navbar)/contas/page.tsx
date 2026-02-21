import Inline from "@/app/ui/Flexbox/Inline";
import Stack from "@/app/ui/Flexbox/Stack";
import NavigationButton from "@/app/ui/NavigationButton";
import CreateAccountForm from "./CreateAccountForm";
import AccountList from "./AccountsList";

export default async function Page() {
    console.log('📃 PAGE - CONTAS');
    
    return (
        <>
            <Inline align="center" gap="md">
                <NavigationButton href="/dashboard"/>
                <h1>Contas</h1>
            </Inline>

            <Inline justify="between">
                <Stack>
                    <label htmlFor="accountBalance">Saldo em conta</label>
                    <output id="accountBalance">R$ 10.000.000,00</output>
                </Stack>

                <Stack>
                    <label htmlFor="projectedBalance">Previsto até 30/03</label>
                    <output id="projectedBalance">R$ 10.000.000,00</output>
                </Stack>
            </Inline>

            <AccountList />

            <CreateAccountForm />
        </>
    );
}
