import type { Metadata } from "next";
import './css/typography.css';
import './css/reset.css';
import './css/colors.css';
import './css/layout.css';

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
