import './globals.css';
import { ReactNode } from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${roboto.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
