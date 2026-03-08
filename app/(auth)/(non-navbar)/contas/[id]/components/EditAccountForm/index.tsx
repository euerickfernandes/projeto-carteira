'use client';

import Button from "@/app/ui/Button";
import Stack from "@/app/ui/Flexbox/Stack";
import Form from "@/app/ui/Form";
import Input from "@/app/ui/Form/Input";
import { useActionState, useState } from "react";
import { editAccountAction } from "./action";
import Box from "@/app/ui/Box";
import { Prisma } from "@prisma/client";
import { numberToCurrency } from "@/app/lib/format";
import { Decimal } from "@prisma/client/runtime/library";

export default function EditAccountForm({ children }: { children: React.ReactNode }) {
  const [state, action, isPending] = useActionState(editAccountAction, null);

  return (
    <Box>
      <Form action={ action }>
        { children }

        <Button 
          disabled={ isPending } 
          fillWidth
        >
          { isPending ? 'Salvando alterações...' : 'Salvar alterações' }
        </Button>

        <a href="#">Apagar Conta</a> 
      </Form>
    </Box>
  )
}