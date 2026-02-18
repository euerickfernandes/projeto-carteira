import NextForm from "next/form";
import { FormHTMLAttributes } from "react";
import styles from './Form.module.css';

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
    action: NonNullable<string | ((formData: FormData) => void | Promise<void>) | undefined>;
    children: React.ReactNode
} 

export default function Form({
    action,
    children,
    ...rest
}: FormProps) {
  return (
    <NextForm 
        action={ action } 
        className={ styles.form } 
        { ...rest }
    >
        { children }
    </NextForm>
  )
}
