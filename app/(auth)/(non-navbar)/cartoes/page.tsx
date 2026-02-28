import Inline from "@/app/ui/Flexbox/Inline";
import NavigationButton from "@/app/ui/NavigationButton";
import CreateCreditCardForm from "./components/CreateCreditCardForm";
import CreditCardsList from "./components/CreditCardsList";
import CreditCardsSummary from "./components/CreditCardsSummary";
import CreditCardFormFields from "./components/CreditCardFormFields";

export default function Page() {
    console.log('📃 PAGE - CARTÕES');

    return (
        <>
            <Inline align="center" gap="md">
                <NavigationButton href="/dashboard" />
                <h1>Cartões de Crédito</h1>
            </Inline>

            <CreditCardsSummary />
            <CreditCardsList />

            <CreateCreditCardForm>
                <CreditCardFormFields />
            </CreateCreditCardForm>
        </>
    );
}
