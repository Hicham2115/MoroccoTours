// app/layout.js
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import RevealObserver from './components/RevealObserver';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap'
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata = {
  title: 'Morocco Tours — Tours & Travels',
  description: 'Private, curated journeys through Morocco since 2008. Marrakech, Fez, Ouarzazate, Tangier, Agadir.',
  icons: { icon: '/logo.png' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
