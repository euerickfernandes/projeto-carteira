import styles from './Flexbox.module.css'

export type FlexboxProps = {
    align?: "start" | "center" | "end" | "stretch"
    children: React.ReactNode
    direction?: "row" | "column"
    justify?: "start" | "center" | "between" | "around"
    gap?: "sm" | "md" | "lg"
}

export default function Flexbox({
    align = 'center',
    children,
    direction = 'row',
    justify = 'start',
    gap = 'sm'
}: FlexboxProps) {

    const className = `
        ${styles.flexbox}
        ${styles[direction]}
        ${styles[`align-${align}`]}
        ${styles[`gap-${gap}`]}
        ${styles[`justify-${justify}`]}
    `;

    return (
        <div className={ className }>{ children }</div>
    )
}
