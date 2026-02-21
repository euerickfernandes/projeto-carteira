export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('🌲 LAYOUT - (AUTH)');

  return (
    <>
      { children }
    </>
  );
}
