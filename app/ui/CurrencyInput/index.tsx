

import { currencyMask } from "@/app/lib/mask";
import Input, { InputProps } from "../Form/Input";

export default function CurrencyInput({ ...props }: InputProps){
    'use client'
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        currencyMask(event);
    }

    return (
        <Input maxLength={ 23 } onChange={ handleChange } type="text" { ...props } />
    );
}