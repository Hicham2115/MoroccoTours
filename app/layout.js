// app/layout.js
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import RevealObserver from './components/RevealObserver';
import { LangProvider } from './lang/LangContext';

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
  title: 'Morocco Tours & Sahara Desert Expeditions | Morocco Tours',
  description: 'Discover Morocco with expert-designed private tours. Sahara desert expeditions, Marrakech medina excursions, Atlas mountain treks & imperial city journeys. Tailor-made Morocco travel packages from €640/person.',
  keywords: 'Morocco tours, private tours Morocco, Sahara desert tours, Marrakech excursions, Morocco travel packages, Morocco itinerary, Atlas mountains tour, Fez guided tour, Morocco private tour operator',
  icons: { icon: '/logo.png' },
  openGraph: {
    title: 'Morocco Tours & Sahara Desert Expeditions | Morocco Tours',
    description: 'Bespoke Morocco travel designed by locals. Sahara camps, medina walks, Atlas treks — all private, all extraordinary.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Morocco Tours',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Tours & Sahara Desert Expeditions',
    description: 'Bespoke Morocco travel designed by locals. Sahara camps, medina walks, Atlas treks — all private, all extraordinary.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Morocco Tours',
  description: 'Private Morocco tours and Sahara desert expeditions. Expert-designed itineraries for discerning travellers.',
  url: 'https://www.moroccotours.travel',
  logo: 'https://www.moroccotours.travel/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rue Sidi Fateh',
    addressLocality: 'Marrakech',
    postalCode: '40000',
    addressCountry: 'MA',
  },
  telephone: '+212524440118',
  email: 'hello@moroccotours.travel',
  priceRange: '€€€',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '644',
    bestRating: '5',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LangProvider>
          <RevealObserver />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
