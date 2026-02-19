import Link from 'next/link';
import styles from './Navbar.module.css';
import Stack from '../Flexbox/Stack';
import Image from 'next/image';
import dashboardIcon from '@/public/icons/dashboard.svg';
import dashboardActiveIcon from '@/public/icons/dashboard_active.svg';
import transactionsIcon from '@/public/icons/transacoes.svg';
import transactionsActiveIcon from '@/public/icons/transacoes_active.svg';
import investmentsIcon from '@/public/icons/investimentos.svg';
import investmentsActiveIcon from '@/public/icons/investimentos_active.svg';
import goalsIcon from '@/public/icons/objetivos.svg';
import goalsActiveIcon from '@/public/icons/objetivos_active.svg';
import NavbarLink from './NavbarLink';


export default function Navbar() {
    return (
        <nav className={ styles.navbar }>
            <NavbarLink 
                activeIcon={ dashboardActiveIcon }
                href='/dashboard'
                icon={ dashboardIcon }
                name='Dashboard'
            />

            <NavbarLink 
                activeIcon={ transactionsActiveIcon }
                href='/transacoes'
                icon={ transactionsIcon }
                name='Transações'
            />

            <NavbarLink 
                activeIcon={ investmentsActiveIcon }
                href='/investimentos'
                icon={ investmentsIcon }
                name='Investimentos'
            />

            <NavbarLink 
                activeIcon={ goalsActiveIcon }
                href='/objetivos'
                icon={ goalsIcon }
                name='Objetivos'
            />
            {/* <Stack>
                <Image 
                    alt="Dashboard"
                    className={ styles.icon }
                    height={ 24 }
                    src={ dashboardIcon } 
                    width={ 24 }
                />

                <Image 
                    alt="Dashboard"
                    className={ styles.activeIcon }
                    height={ 24 }
                    src={ dashboardActiveIcon } 
                    width={ 24} 
                />
                <Link href="/dashboard">Dashboard</Link>
            </Stack>

            <Stack>
                <Image 
                    alt="Transações"
                    className={ styles.icon }
                    height={ 24 }
                    src={ transactionsIcon } 
                    width={ 24 }
                />
                
                <Image 
                    alt="Transações"
                    className={ styles.activeIcon }
                    height={ 24 }
                    src={ transactionsActiveIcon } 
                    width={ 24 }
                />
                <Link href="/transacoes">Transações</Link>
            </Stack>

            <Stack>
                <Image 
                    alt="Investimentos"
                    className={ styles.icon }
                    height={ 24 }
                    src={ investmentsIcon } 
                    width={ 24 }
                />
                
                <Image 
                    alt="Investimentos"
                    className={ styles.activeIcon }
                    height={ 24}
                    src={ investmentsActiveIcon } 
                    width={ 24 }
                />
                <Link href="/investimentos">Investimentos</Link>
            </Stack>

            <Stack>
                <Image 
                    alt="Objetivos"
                    className={ styles.icon }
                    height={ 24 }
                    src={ goalsIcon } 
                    width={ 24 }
                />
                
                <Image 
                    alt="Objetivos"
                    className={ styles.activeIcon }
                    height={ 24 }
                    src={ goalsActiveIcon } 
                    width={ 24 }
                />
                <Link href="/objetivos">Objetivos</Link>
            </Stack> */}
        </nav>
    );
}
