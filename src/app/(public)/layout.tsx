// app/(public)/layout.tsx
import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React from 'react';

export const metadata: Metadata = {
  title: {
    template: 'Escala App',
    default: 'Escala App - Sistema com autenticação e dashboard.',
  },
  description:
    'Public layout for the Escala App, providing a consistent header and footer across all public pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  );
}
