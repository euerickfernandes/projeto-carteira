'use client';

import Button from "@/app/ui/Button";
import Stack from "@/app/ui/Flexbox/Stack";
import Input from "@/app/ui/Form/Input";
import ToggleInput from "@/app/ui/Form/ToggleInput";
import { useActionState, useState } from "react";
import { createAccountAction } from "./action";
import BottomForm from "@/app/ui/BottomForm";

export default function CreateAccountForm() {
  const [state, action, isPending] = useActionState(createAccountAction, null);
  const [open, setOpen] = useState(false);

  function handleChange(){ setOpen(!open) }

  return (
    <BottomForm action={ action }>
      <ToggleInput
          checked={ open }
          data-toggle
          id="bottomToggle"
          fillWidth={ open }
          icon="add"
          label="Nova Conta" 
          onChange={ handleChange }
          type="checkbox"
      />

      <Stack>
        <label htmlFor="initialAmount">Saldo inicial</label>
          <Input 
            defaultValue="R$ 0,00" 
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
            defaultValue="" 
            id="name"
            maxLength={ 50 } 
            name="name"
            placeholder="Ex: Banco do Brasil"
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
    </BottomForm>
  )
}