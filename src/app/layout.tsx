// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import React from 'react';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s - Escala App',
    default: 'Escala App - Sistema com authenticate e dashboard.',
  },
  description:
    'By leveraging insights from our network of industry insiders, you’ll know exactly when to buy' +
    ' to maximize profit, and exactly when to sell to avoid painful losses.',
  openGraph: {
    title: 'Escala App',
    description:
      'By leveraging insights from our network of industry insiders, you’ll know exactly when to buy' +
      ' to maximize profit, and exactly when to sell to avoid painful losses.',
    url: 'https://escala-app.vercel.app',
    siteName: 'Escala App',
    images: [
      {
        url: 'https://escala-app.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Escala App - Sistema com authenticate e dashboard.',
      },
    ],
    locale: 'pt-BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escala App',
    description:
      'By leveraging insights from our network of industry insiders, you’ll know exactly when to buy' +
      ' to maximize profit, and exactly when to sell to avoid painful losses.',
    images: ['https://escala-app.vercel.app/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000',
      },
    ],
  },
  themeColor: '#000000',
  manifest: '/site.webmanifest',
  keywords: [
    'escala app',
    'sistema de autenticação',
    'dashboard',
    'nextjs',
    'react',
    'typescript',
    'ant-design',
    'auth',
    'authentication',
  ],
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://escala-app.vercel.app',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  verification: {
    google: 'google-site-verification=your-google-site-verification-code',
    yandex: 'yandex-verification: your-yandex-verification-code',
    me: 'your-me-verification-code',
  },
  authors: [
    {
      name: 'Wemerson Nino',
      url: 'https://yourwebsite.com',
    },
  ],
  creator: 'Wemerson Nino',
  publisher: 'Your Company',
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  applicationName: 'Escala App',
  category: 'Business',
  referrer: 'no-referrer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="flex-auto">{children}</main>
      </body>
    </html>
  );
}
