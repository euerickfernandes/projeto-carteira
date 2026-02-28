import Inline from "@/app/ui/Flexbox/Inline";
import NavigationButton from "@/app/ui/NavigationButton";
import { getFinancialAccount } from "@/app/data-access/financialAccount";
import EditAccountForm from "./components/EditCreditCardForm";
import { getCreditCard } from "@/app/data-access/creditCard";
import CreditCardsSummary from "../components/CreditCardsSummary";
import CreditCardFormFields from "../components/CreditCardFormFields";

export default async function Page({
    params
}: {
    params: Promise<{id: string}>
}) {
    const { id } = await params;

    console.log('📃 PAGE - CARTÃO', id);

    const creditCard = await getCreditCard(id);

    if(!creditCard)
        return;

    return (
        <>
            <Inline align="center" gap="md">
                <NavigationButton href="/cartoes"/>
                <h1>{ creditCard?.name }</h1>
            </Inline>

            <CreditCardsSummary id={ creditCard.id }/>
            
            <EditAccountForm>
                <CreditCardFormFields id={ creditCard.id } />
            </EditAccountForm>
        </>
    );
}
