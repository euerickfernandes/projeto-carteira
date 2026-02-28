import { Decimal } from ".prisma/client/runtime/library";
import { getCreditCard } from "@/app/data-access/creditCard";
import { getFinancialAccount } from "@/app/data-access/financialAccount";
import { numberToCurrency } from "@/app/lib/format";
import Inline from "@/app/ui/Flexbox/Inline";
import Stack from "@/app/ui/Flexbox/Stack";
import Input from "@/app/ui/Form/Input";

export default async function CreditCardFormFields({ id }: { id?: string }){
    const creditCard = id ? await getCreditCard(id) : null;

    return (
        <>
            { id ? 
                <input name="id" type="hidden" defaultValue={ id }/>  
            : null }

            <Stack>
                <label htmlFor="limit">Limite</label>

                <Input 
                    defaultValue={ id ? numberToCurrency(creditCard?.limit as Decimal) : "R$ 0,00" } 
                    id="limit"
                    inputMode="numeric"
                    name="limit"
                    required
                    type="text" 
                    variant="currency"
                />
            </Stack>

            <Inline align="end">
                <Stack>
                    <label htmlFor="closesAt">Melhor dia de compra</label>

                    <Input 
                        autoComplete="off"
                        defaultValue={ id ? creditCard?.closesAt as number : "" } 
                        id="closesAt"
                        inputMode="numeric"
                        max={ 31 } 
                        min={ 1 } 
                        name="closesAt"
                        placeholder="Ex: 10"
                        required
                        type="number" 
                    />
                </Stack>

                <Stack>
                    <label htmlFor="expiresAt">Vencimento</label>

                    <Input 
                        autoComplete="off"
                        defaultValue={ id ? creditCard?.expiresAt as number : "" } 
                        id="expiresAt"
                        inputMode="numeric"
                        max={ 31 } 
                        min={ 1 } 
                        name="expiresAt"
                        placeholder="Ex: 20"
                        required
                        type="number" 
                    />
                </Stack>
            </Inline>

            <Stack>
            <label htmlFor="name">Nome</label>

            <Input 
                autoComplete="off"
                defaultValue={ id ? creditCard?.name : "" } 
                id="name"
                maxLength={ 50 } 
                name="name"
                placeholder="Ex: Banco do Brasil"
                required
                type="text" 
            />
            </Stack>
        </>
    );
}