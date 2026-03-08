'use client';

import Button from "@/app/ui/Button";
import Form from "@/app/ui/Form";
import { useActionState, useState } from "react";
import { editCreditCardAction } from "./action";
import Box from "@/app/ui/Box";

export default function EditAccountForm({ children }: { children: React.ReactNode }) {
  const [state, action, isPending] = useActionState(editCreditCardAction, null);

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

        <a href="#">Apagar Cartão</a>
      </Form>
    </Box>
  )
}