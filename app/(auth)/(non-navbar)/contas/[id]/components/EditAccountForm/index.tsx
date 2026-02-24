'use client';

import Button from "@/app/ui/Button";
import Stack from "@/app/ui/Flexbox/Stack";
import Form from "@/app/ui/Form";
import Input from "@/app/ui/Form/Input";
import { useActionState, useState } from "react";
import { createAccountAction } from "./action";
import Box from "@/app/ui/Box";
import { Prisma } from "@prisma/client";
import { numberToCurrency } from "@/app/lib/format";
import { Decimal } from "@prisma/client/runtime/library";

export default function EditAccountForm({ 
  id,
  initialAmount,
  name
}: Prisma.FinancialAccountUpdateInput) {
  const [state, action, isPending] = useActionState(createAccountAction, null);

  return (
    <Box>
      <Form action={ action }>
        <input name="accountId" type="hidden" defaultValue={ id as string }/>

        <Stack>
          <label htmlFor="initialAmount">Saldo inicial</label>
            <Input 
              defaultValue={ numberToCurrency(initialAmount as Decimal) } 
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
              defaultValue={ name as string } 
              id="name"
              maxLength={ 50 } 
              name="name"
              required
              type="text" 
          />
        </Stack>

        <Button 
          disabled={ isPending } 
          fitContent
          fillWidth
        >
          { isPending ? 'Salvando alterações...' : 'Salvar alterações' }
        </Button>

        <a href="#">Apagar Conta</a>
      </Form>
    </Box>
  )
}