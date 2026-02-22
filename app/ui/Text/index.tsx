import styles from './Text.module.css';
import { JSX } from 'react';

type TextProps = {
    as?: keyof JSX.IntrinsicElements
    children: React.ReactNode
    className?: string 
    size?: 'sm' | 'fd' | 'md' | 'lg'
    weight?: 'regular' | 'medium' | 'semiBold'
}

export default function Text({
    as: Component = 'p',
    children,
    className,
    size = 'fd',
    weight = 'regular',
}: TextProps){
    const textClassName = `
        ${ className ? styles.className : '' }
        ${styles[size]}
        ${styles[weight]}
    `;
    return <Component className={ textClassName }>{ children }</Component>
}