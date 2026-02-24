import { getFinancialAccount, getFinancialAccountTotalBalance } from '@/app/data-access/financialAccount';
import { getUserCount, getUsers } from '@/app/data-access/user';
import { numberToCurrency } from '@/app/lib/format';
import Inline from '@/app/ui/Flexbox/Inline';
import Stack from '@/app/ui/Flexbox/Stack';
import Text from '@/app/ui/Text';
import { Decimal } from '@prisma/client/runtime/library';
import React from 'react'

export default async function AccountSummary({accountId}: {accountId: string}) {
  const accountTotalBalance = await getFinancialAccountTotalBalance(accountId);
  
  return (
    <Inline justify="between">
        <Stack>
            <label htmlFor="accountTotalBalance">Saldo em conta</label>
            
            <output id="accountTotalBalance">
                <Text as="span" size="lg">{ numberToCurrency(accountTotalBalance as Decimal) }</Text>
            </output>
        </Stack>

        <Stack>
            <label htmlFor="projectedBalance">Previsto até 30/03</label>
            <output id="projectedBalance">{ numberToCurrency(accountTotalBalance as Decimal) }</output>
        </Stack>
    </Inline>
  );
}
