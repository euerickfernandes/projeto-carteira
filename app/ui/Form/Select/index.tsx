import styles from '../Form.module.css';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    children: React.ReactNode,
}

export default function Select({
    children,
    ...rest
}: SelectProps) {
    return (
        <select className={ styles.input } { ...rest }>
            { children }
        </select>
    )
}
