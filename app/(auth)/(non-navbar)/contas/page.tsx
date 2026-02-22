import Inline from "@/app/ui/Flexbox/Inline";
import NavigationButton from "@/app/ui/NavigationButton";
import CreateAccountForm from "./components/CreateAccountForm";
import AccountList from "./components/AccountsList";
import AccountSummary from "./components/AccountsSummary";

export default function Page() {
    console.log('📃 PAGE - CONTAS');
    
    return (
        <>
            <Inline align="center" gap="md">
                <NavigationButton href="/dashboard"/>
                <h1>Contas</h1>
            </Inline>

            <AccountSummary />
            <AccountList />
            <CreateAccountForm />
        </>
    );
}
