import { numberToCurrency } from "./format";

export function currencyMask(event: React.FormEvent<HTMLInputElement>){
    const input = event.currentTarget;

    const value = input.value;
    const numberValue = Number(value.replace(/\D/g, '')) / 100;

    const currencyValue =  numberToCurrency(numberValue);

    input.value = currencyValue;
}