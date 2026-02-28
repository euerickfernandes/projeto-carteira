import { Decimal } from ".prisma/client/runtime/library";
import { getFinancialAccount } from "@/app/data-access/financialAccount";
import { numberToCurrency } from "@/app/lib/format";
import Stack from "@/app/ui/Flexbox/Stack";
import Input from "@/app/ui/Form/Input";

export default async function AccountFormFields({ id }: { id?: string }){
    const account = id ? await getFinancialAccount(id) : null;

    return (
        <>
            { id ? 
                <input name="id" type="hidden" defaultValue={ id }/>  
            : null }
            
            <Stack>
                <label htmlFor="initialAmount">Saldo inicial</label>

                <Input 
                    defaultValue={ id ? numberToCurrency(account?.initialAmount as Decimal) : "R$ 0,00" } 
                    id="initialAmount"
                    inputMode="numeric"
                    name="initialAmount"
                    required
                    type="text" 
                    variant="currency"
                />
            </Stack>
    
            <Stack>
                <label htmlFor="name">Nome</label>
        
                <Input
                    autoComplete="off"
                    defaultValue={ id ? account?.name : '' } 
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