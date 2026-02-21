import Link from 'next/link';
import styles from './NavigationButton.module.css';

type NavigationButtonProps = {
    href: string,
}

export default function NavigationButton({
    href,
}: NavigationButtonProps){
    return (
        <Link href={ href }>
            <button className={ styles.navigationButton } type="button"></button>
        </Link>
    );
}