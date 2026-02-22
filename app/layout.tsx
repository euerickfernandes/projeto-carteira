import type { Metadata } from "next";
import './global-css/typography.css';
import './global-css/reset.css';
import './global-css/colors.css';
import './global-css/layout.css';

export const metadata: Metadata = {
  title: "Projeto Carteira",
  description: "Controle, monitoramento e planejamento de finanças pessoais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('🫚 ROOT LAYOUT');

  return (
    <html lang="pt-br">
      <body>
        { children }
      </body>
    </html>
  );
}
