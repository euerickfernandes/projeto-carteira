import styles from '../layout.module.css';
import Navbar from '../../ui/Navbar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('🌲 LAYOUT - (WITH-NAVBAR)');

  return (
    <>
      <main className={ styles.main }>
        { children }
      </main>

      <Navbar />
    </>
  );
}
