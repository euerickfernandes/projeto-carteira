import styles from './Flexbox.module.css'

export type FlexboxProps = {
    align?: "start" | "center" | "end" | "stretch"
    children: React.ReactNode
    direction?: "row" | "column"
    gap?: "sm" | "md" | "lg"
    justify?: "start" | "center" | "between" | "around"
    wrap?: true
}

export function flexboxClassName(props: Omit<FlexboxProps, 'children'>): string{
    return `
        ${styles.flexbox}
        ${styles[`${props.direction}`]}
        ${styles[`align-${props.align}`]}
        ${styles[`gap-${props.gap}`]}
        ${styles[`justify-${props.justify}`]}
        ${props.wrap ? styles.wrap : ''}
    `;
}

export default function Flexbox({
    align = 'center',
    children,
    direction = 'row',
    gap = 'sm',
    justify = 'start',
    wrap,
}: FlexboxProps) {
    return (
        <div className={ flexboxClassName({ align, direction, gap, justify, wrap }) }>{ children }</div>
    )
}
