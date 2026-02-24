import Form, { FormProps } from "../Form";
import styles from './BottomForm.module.css';

export default function BottomForm({ 
  action,
  children,
  ...props 
}: FormProps) {
  return (
    <Form 
      action={ action } 
      className={ styles.bottomForm } 
      { ...props }
    >
      { children }
    </Form>
  )
}
