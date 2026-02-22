import { getFinancialAccounts } from "@/app/data-access/financialAccount";
import { numberToCurrency } from "@/app/lib/format";
import Box from "@/app/ui/Box";
import List from "@/app/ui/List";
import Link from "next/link";

export default async function AccountsList() {
    const accounts = await getFinancialAccounts();

    return (
        <List>
            {accounts ? accounts.map((account) =>(
                <li key={ account.id }>
                    <Link href="#">
                        <Box align="center" justify="between">
                            <h2><b>{ account.name }</b></h2>
                            <p>{ numberToCurrency(account.initialAmount) }</p>
                        </Box>
                    </Link>
                </li>
            )) : null}
        </List>
    )
}
