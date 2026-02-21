import { InputHTMLAttributes } from "react";
import styles from './ToggleInput.module.css';

type ToggleInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' & 'id'> & {
    icon?: 'add' | '',
    id: string,
    fillWidth?: boolean,
    fitContent?: true,
    label: string
    type: 'checkbox' | 'radio'
}

export default function ToggleInput({ 
    icon,
    id,
    fillWidth,
    fitContent,
    label,
    type='checkbox',
    ...props 
}: ToggleInputProps){
    const className = `
        ${styles.toggleInput}
        ${fillWidth ? styles.fillWidth : ''} 
        ${fitContent ? styles.fitContent : ''} 
    `;

    return (
        <label className={ className } htmlFor={ id }>
            <input
                id={ id }
                type={ type }
                { ...props }
            />
            { label }
        </label>
    );
}