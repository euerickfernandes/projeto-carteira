import Flexbox, { FlexboxProps } from "../Flexbox";
import styles from './Box.module.css';

type BoxProps = FlexboxProps & { lightBackground?: true }

export default function Box({ lightBackground , ...props }: BoxProps){
    const className = `
        ${ styles.box }
        ${ lightBackground ? styles.light : '' }
    `;

    return (
        <div className={ className }>
            <Flexbox { ...props }>
                { props.children }
            </Flexbox>
        </div>
    );
}