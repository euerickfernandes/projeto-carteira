'use client';

import Button from "@/app/ui/Button";
import CurrencyInput from "@/app/ui/CurrencyInput";
import BottomContainer from "@/app/ui/BottomContainer";
import Stack from "@/app/ui/Flexbox/Stack";
import Form from "@/app/ui/Form";
import Input from "@/app/ui/Form/Input";
import ToggleInput from "@/app/ui/Form/ToggleInput";
import { useActionState, useState } from "react";
import { createAccountAction } from "./action";

export default function CreateAccountForm() {
  const [state, action, isPending] = useActionState(createAccountAction, null);
  const [open, setOpen] = useState(false);

  function handleChange(){
    setOpen(!open)
  }

  return (
    <BottomContainer>
      <ToggleInput
          checked={ open }
          id="newAccount"
          fillWidth={ open }
          label="Nova Conta" 
          onChange={ handleChange }
          type="checkbox"
      />

      {open ? 
        <Form action={ action }>
          <Stack>
            <label htmlFor="initialAmount">Saldo inicial</label>

            <CurrencyInput 
                defaultValue="R$ 0,00" 
                id="initialAmount"
                name="initialAmount"
                required
                type="text" 
            />
          </Stack>

          <Stack>
            <label htmlFor="name">Nome</label>

            <Input 
                autoComplete="off"
                defaultValue="Banco do Brasil" 
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
            { isPending ? 'Salvando Conta' : 'Salvar Conta' }
          </Button>
        </Form>
      : null}
    </BottomContainer>
  )
}
