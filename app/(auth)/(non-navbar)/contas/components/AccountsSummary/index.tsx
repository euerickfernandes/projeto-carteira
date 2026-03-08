import { getFinancialAccountsTotalBalance, getFinancialAccountTotalBalance } from '@/app/data-access/financialAccount';
import { getUserCount, getUsers } from '@/app/data-access/user';
import { numberToCurrency } from '@/app/lib/format';
import Inline from '@/app/ui/Flexbox/Inline';
import Stack from '@/app/ui/Flexbox/Stack';
import Text from '@/app/ui/Text';
import { Decimal } from '@prisma/client/runtime/library';
import { randomInt } from 'crypto';
import React from 'react'

export default async function AccountsSummary({ id }: { id?: string }) {
  const randomIndex = randomInt(0, await getUserCount());
  const user = (await getUsers())[randomIndex];

  const totalBalance = id ? await getFinancialAccountTotalBalance(id) : await getFinancialAccountsTotalBalance(user.id);

  return (
    <Inline justify="between">
      <Stack>
        <Text as="h2">Saldo em conta</Text>
        <Text size="lg">{numberToCurrency(totalBalance as Decimal)}</Text>
      </Stack>

      <Stack>
        <Text align="right" as="h2">Previsto até 30/03</Text>
        <Text align="right">{numberToCurrency(totalBalance as Decimal)}</Text>
      </Stack>
    </Inline>
  );
}
