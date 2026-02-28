'use client';

import Button from "@/app/ui/Button";
import Stack from "@/app/ui/Flexbox/Stack";
import Input from "@/app/ui/Form/Input";
import ToggleInput from "@/app/ui/Form/ToggleInput";
import React, { useActionState, useState } from "react";
import { createCreditCardAction } from "./action";
import BottomForm from "@/app/ui/BottomForm";
import Inline from "@/app/ui/Flexbox/Inline";

export default function CreateCreditCardForm({ children }: { children: React.ReactNode }) {
  const [state, action, isPending] = useActionState(createCreditCardAction, null);
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
          label="Nova Cartão" 
          onChange={ handleChange }
          type="checkbox"
      />

      { children }

      {/* <Stack>
        <label htmlFor="limit">Limite</label>
          <Input 
            defaultValue="R$ 0,00" 
            id="limit"
            inputMode="numeric"
            name="limit"
            required
            type="text" 
            variant="currency"
          />
      </Stack>

      <Inline>
        <Stack>
          <label htmlFor="closesAt">Melhor dia de compra</label>

          <Input 
              autoComplete="off"
              defaultValue="" 
              id="closesAt"
              inputMode="numeric"
              max={ 31 } 
              min={ 1 } 
              name="closesAt"
              placeholder="Ex: 10"
              required
              type="number" 
          />
        </Stack>

        <Stack>
          <label htmlFor="expiresAt">Vencimento</label>

          <Input 
              autoComplete="off"
              defaultValue="" 
              id="expiresAt"
              inputMode="numeric"
              max={ 31 } 
              min={ 1 } 
              name="expiresAt"
              placeholder="Ex: 20"
              required
              type="number" 
          />
        </Stack>
      </Inline>

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
      </Stack> */}

      <Button 
        disabled={ isPending } 
        fitContent
      >
        { isPending ? 'Salvando Cartão...' : 'Salvar Cartão' }
      </Button>
    </BottomForm>
  )
}