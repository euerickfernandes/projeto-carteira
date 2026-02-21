import styles from '@/app/ui/Flexbox/Flexbox.module.css'
import { flexboxClassName, FlexboxProps } from '../Flexbox';

type ListProps = FlexboxProps;

export default function List({
    align = 'stretch',
    children,
    direction = 'column',
    gap = 'md',
    justify = 'start',
}: ListProps) {
    return (
        <ul className={ flexboxClassName({ align, direction, justify, gap }) }>{ children }</ul>
    )
}