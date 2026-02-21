import styles from './Button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    icon?: 'logout',
    fillWidth?: true,
    fitContent?: true,
    variant?: 'secondary',
}

export default function Button({
    children,
    fillWidth,
    fitContent,
    icon,
    variant,
    ...props
}: ButtonProps) {
    const className = `
        ${styles.button}
        ${fillWidth ? styles.fillWidth : ''} 
        ${fitContent ? styles.fitContent : ''} 
        ${icon ? styles[icon] : ''} 
        ${variant ? styles[variant] : ''}
    `;
    return (
        <button className={ className } { ...props }>
            { children }
        </button>
    )
}
