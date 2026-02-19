'use client'

import Link from 'next/link';
import styles from './NavbarLink.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type NavbarLinkProps = {
    activeIcon: string,
    href: string,
    icon: string,
    name: string,
}

export default function NavbarLink({
    activeIcon,
    href,
    icon,
    name
}: NavbarLinkProps){
    const pathname = usePathname();
    const isActive = pathname.includes(href);

    const className = `
        ${styles.navbarLink}
        ${isActive ? styles.active : ''}
    `;

    return(
        <Link
            className={ className }
            href={ href }
        >
            <Image
                alt={ name }
                src={ isActive ? activeIcon : icon }
            />
            
            { name }
        </Link>
    );
}