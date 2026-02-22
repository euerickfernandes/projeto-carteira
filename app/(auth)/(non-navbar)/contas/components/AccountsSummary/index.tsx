import Inline from '@/app/ui/Flexbox/Inline';
import Stack from '@/app/ui/Flexbox/Stack';
import NavigationButton from '@/app/ui/NavigationButton';
import Text from '@/app/ui/Text';
import React from 'react'

export default function AccountSummary() {
  return (
    <Inline justify="between">
        <Stack>
            <label htmlFor="accountBalance">Saldo em conta</label>
            
            <output id="accountBalance">
                <Text as="span" size="lg">R$ 10.000.000,00</Text>
            </output>
        </Stack>

        <Stack>
            <label htmlFor="projectedBalance">Previsto até 30/03</label>
            <output id="projectedBalance">R$ 10.000.000,00</output>
        </Stack>
    </Inline>
  );
}
