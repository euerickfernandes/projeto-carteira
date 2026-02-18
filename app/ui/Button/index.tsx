import styles from './Button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    icon?: 'logout',
    fillWidth?: true,
    variant?: 'secondary',
}

export default function Button({
    children,
    fillWidth,
    icon,
    variant,
    ...rest
}: ButtonProps) {
    const className = `
        ${styles.button}
        ${fillWidth ? styles.fillWidth : ''} 
        ${icon ? styles[icon] : ''} 
        ${variant ? styles[variant] : ''}
    `;
    return (
        <button className={ className } { ...rest }>
            { children }
        </button>
    )
}
