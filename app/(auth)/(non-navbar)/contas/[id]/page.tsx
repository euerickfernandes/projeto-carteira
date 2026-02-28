import Inline from "@/app/ui/Flexbox/Inline";
import NavigationButton from "@/app/ui/NavigationButton";
import { getFinancialAccount } from "@/app/data-access/financialAccount";
import EditAccountForm from "./components/EditAccountForm";
import AccountFormFields from "../components/AccountFormFields";
import AccountsSummary from "../components/AccountsSummary";

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

            <AccountsSummary id={ account?.id as string } />
            
            <EditAccountForm>
                <AccountFormFields id={ account.id } />
            </EditAccountForm>
        </>
    );
}
