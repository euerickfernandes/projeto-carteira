'use client';

import { currencyMask } from '@/app/lib/mask';
import styles from '../Form.module.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    mask?: 'currency'
    variant?: 'currency'
};

export default function Input({ 
    mask, 
    variant, 
    ...props 
}: InputProps){
    const className = `
        ${styles.input}
        ${ variant ? styles[variant] : '' }
    `;

    if(mask) return Mask[mask](className, { ...props });

    if(variant === 'currency') return Mask['currency'](className, { ...props });

    return (
        <input 
            className={ className }
            { ...props } 
        />
    );
}

class Mask{
    static currency(className: string, props: InputProps) {
        
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            currencyMask(event);
        }
    
        return (
            <input 
                className={ className }
                maxLength={ 23 } 
                onChange={ handleChange }
                { ...props } 
                type="text" 
            />
        );
    }
}