import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../../app/globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Login | App',
  description: 'Página de autenticação do sistema',
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased dark:bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
