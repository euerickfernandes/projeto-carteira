import Inline from "@/app/ui/Flexbox/Inline";
import NavigationButton from "@/app/ui/NavigationButton";
import { getFinancialAccount } from "@/app/data-access/financialAccount";
import AccountSummary from "./components/AccountSummary";
import EditAccountForm from "./components/EditAccountForm";

export default async function Page({
    params
}: {
    params: Promise<{id: string}>
}) {
    const { id } = await params;

    console.log('📃 PAGE - CONTA', id);

    const account = await getFinancialAccount(id);

    if(!account)
        return;

    return (
        <>
            <Inline align="center" gap="md">
                <NavigationButton href="/contas"/>
                <h1>{ account?.name }</h1>
            </Inline>

            <AccountSummary accountId={ account?.id as string } />
            
            <EditAccountForm 
                id={ account.id }  
                initialAmount={ Number(account.initialAmount) }
                name={ account.name }
            />
        </>
    );
}
