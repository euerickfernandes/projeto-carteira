import styles from './layout.module.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('🌲 LAYOUT - (PUBLIC)');

  return (
    <main className={ styles.main }>
      { children }
    </main>
  );
}
