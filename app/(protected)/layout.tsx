import Link from 'next/link';
import styles from './layout.module.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('🌲 LAYOUT - (PROTECTED)');

  return (
    <>
      <main className={ styles.main }>
        { children }
      </main>

      <nav>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/transacoes">Transações</Link>
        <Link href="/investimentos">Investimentos</Link>
        <Link href="/objetivos">Objetivos</Link>
      </nav>
    </>
  );
}
