import styles from './Button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    icon?: 'logout'
    variant?: 'secondary'
}

export default function Button({
    children,
    icon,
    variant,
    ...rest
}: ButtonProps) {
    const className = `
        ${styles.button}
        ${variant ? styles[variant] : ''}
        ${icon ? styles[icon] : ''}
    `;
    return (
        <button className={ className } { ...rest }>
            { children }
        </button>
    )
}
