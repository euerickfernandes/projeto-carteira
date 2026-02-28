import { getCreditCardsTotalLimit, getCreditCardTotalLimit } from "@/app/data-access/creditCard";
import { getUserCount, getUsers } from '@/app/data-access/user';
import { numberToCurrency } from '@/app/lib/format';
import Inline from '@/app/ui/Flexbox/Inline';
import Stack from '@/app/ui/Flexbox/Stack';
import ProgressBar from "@/app/ui/ProgressBar";
import Text from '@/app/ui/Text';
import { Decimal } from '@prisma/client/runtime/library';
import { randomInt } from 'crypto';
import React from 'react'

export default async function CreditCardsSummary({id }: { id?: string }) {
  const user = (await getUsers())[randomInt(0, await getUserCount())];

  const totalLimit = id ? await getCreditCardTotalLimit(id) : await getCreditCardsTotalLimit(user.id);

  return (
    <Stack>
      <Inline justify="between">
        <Text as="h2" weight="semiBold">Limite Total</Text>
        <Text>{ Number(totalLimit) }%</Text>
      </Inline>

      <ProgressBar 
        max={ Number(totalLimit) }
        value={ Number(totalLimit) / 2 }
      />

      <Inline justify="between">
        <Text>{ numberToCurrency(totalLimit as Decimal) }</Text>
        <Text>{ numberToCurrency(totalLimit as Decimal) }</Text>
      </Inline>
    </Stack>
  );
}
