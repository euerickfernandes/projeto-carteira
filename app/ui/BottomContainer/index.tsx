import styles from './BottomContainer.module.css';

export default function BottomContainer({
    children
}: {
    children: React.ReactNode
}){
    return (
        <div className={ styles.bottomContainer }>
            { children }
        </div>
    );
}