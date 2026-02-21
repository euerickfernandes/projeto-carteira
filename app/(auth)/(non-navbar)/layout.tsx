import parentStyles from '../layout.module.css';
import styles from './layout.module.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('🌲 LAYOUT - (NON-NAVBAR)');

  const className = `
    ${ parentStyles.main }
    ${ styles.main }
  `;

  return (
    <>
      <main className={ className }>
        { children }
      </main>
    </>
  );
}
