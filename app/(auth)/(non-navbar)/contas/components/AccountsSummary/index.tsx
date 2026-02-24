import { getFinancialAccountsTotalBalance } from '@/app/data-access/financialAccount';
import { getUserCount, getUsers } from '@/app/data-access/user';
import { numberToCurrency } from '@/app/lib/format';
import Inline from '@/app/ui/Flexbox/Inline';
import Stack from '@/app/ui/Flexbox/Stack';
import Text from '@/app/ui/Text';
import { Decimal } from '@prisma/client/runtime/library';
import { randomInt } from 'crypto';
import React from 'react'

export default async function AccountsSummary() {
  const randomIndex = randomInt(0, await getUserCount());
  const user = (await getUsers())[randomIndex];

  const accountsTotalBalance = await getFinancialAccountsTotalBalance(user.id);
  
  return (
    <Inline justify="between">
        <Stack>
            <label htmlFor="accountsTotalBalance">Saldo em conta</label>
            
            <output id="accountsTotalBalance">
                <Text as="span" size="lg">{ numberToCurrency(accountsTotalBalance as Decimal) }</Text>
            </output>
        </Stack>

        <Stack>
            <label htmlFor="projectedBalance">Previsto até 30/03</label>
            <output id="projectedBalance">{ numberToCurrency(accountsTotalBalance as Decimal) }</output>
        </Stack>
    </Inline>
  );
}
