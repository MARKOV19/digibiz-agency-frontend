// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { Open_Sans } from 'next/font/google';

// Importation de la police Open Sans
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Digibiz Agency - Le futur des affaires commence ici',
  description: 'Agence spécialisée en digital, IA, e-commerce et import-export. Créons ensemble l’avenir.',
  metadataBase: new URL('https://ton-site.vercel.app'), // Remplace par ton vrai domaine
  openGraph: {
    title: 'Digibiz Agency',
    description: 'Le futur des affaires commence ici. Découvrez nos services digitaux, IA et e-commerce.',
    url: 'https://ton-site.vercel.app',
    siteName: 'Digibiz Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Digibiz Agency - Image de présentation',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digibiz Agency',
    description: 'Le futur des affaires commence ici. Découvrez nos services digitaux, IA et e-commerce.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Optimisation de performance et SEO */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#001f3f" />
      </head>

      <body className={`${openSans.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
