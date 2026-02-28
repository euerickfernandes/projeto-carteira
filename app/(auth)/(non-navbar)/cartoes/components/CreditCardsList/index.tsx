import { getCreditCards } from "@/app/data-access/creditCard";
import { numberToCurrency } from "@/app/lib/format";
import Box from "@/app/ui/Box";
import Inline from "@/app/ui/Flexbox/Inline";
import List from "@/app/ui/List";
import ProgressBar from "@/app/ui/ProgressBar";
import Text from "@/app/ui/Text";
import Link from "next/link";

export default async function CreditCardsList() {
    const creditCards = await getCreditCards();

    return (
        <List>
            <li><Text weight="semiBold">{ creditCards.length } Cartões de Crédito{ creditCards.length > 1 ? 's' : '' }</Text></li>
            
            {creditCards ? creditCards.map((creditCard) =>(
                <li key={ creditCard.id }>
                    <Link href={`/cartoes/${creditCard.id}`}>
                        <Box align="stretch" direction="column">
                            <Inline justify="between">
                                <h2><b>{ creditCard.name }</b></h2>
                                <p>%</p>
                            </Inline>

                            
                            <ProgressBar 
                                max={ Number(creditCard.limit) }
                                value={ Number(creditCard.limit) / 2 }
                            />

                            <Inline justify="between">
                                <p>{ numberToCurrency(creditCard.initialAmount) }</p>
                                <p>{ numberToCurrency(creditCard.limit || 0) }</p>
                            </Inline>
                        </Box>
                    </Link>
                </li>
            )) : null}
        </List>
    )
}
