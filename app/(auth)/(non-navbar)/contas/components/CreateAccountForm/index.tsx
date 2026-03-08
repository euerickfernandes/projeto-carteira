'use client';

import Button from "@/app/ui/Button";
import Stack from "@/app/ui/Flexbox/Stack";
import Input from "@/app/ui/Form/Input";
import ToggleInput from "@/app/ui/Form/ToggleInput";
import React, { useActionState, useState } from "react";
import { createAccountAction } from "./action";
import BottomForm from "@/app/ui/BottomForm";

export default function CreateAccountForm({ children }: { children: React.ReactNode }) {
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

      { children }

      <Button 
        disabled={ isPending } 
        fitContent
        fillWidth
      >
        { isPending ? 'Salvando Conta...' : 'Salvar Conta' }
      </Button> 
    </BottomForm>
  )
}