import styles from './Flexbox.module.css'

export type FlexboxProps = {
    align?: "start" | "center" | "end" | "stretch"
    children: React.ReactNode
    direction?: "row" | "column"
    gap?: "sm" | "md" | "lg"
    justify?: "start" | "center" | "between" | "around"
}

export function flexboxClassName(props: Omit<FlexboxProps, 'children'>): string{
    return `
        ${styles.flexbox}
        ${styles[`${props.direction}`]}
        ${styles[`align-${props.align}`]}
        ${styles[`gap-${props.gap}`]}
        ${styles[`justify-${props.justify}`]}
    `;
}

export default function Flexbox({
    align = 'center',
    children,
    direction = 'row',
    gap = 'sm',
    justify = 'start',
}: FlexboxProps) {
    return (
        <div className={ flexboxClassName({ align, direction, gap, justify }) }>{ children }</div>
    )
}
