import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/navigation/SmoothScroll';
import Header from '@/components/navigation/Header';
import CustomCursor from '@/components/cursor/CustomCursor';
import { CartProvider } from '@/lib/shopify/cart-context';
import CartDrawer from '@/components/cart/CartDrawer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500'],
  style: ['normal', 'italic'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sugarriot.com'),
  title: {
    default: 'SUGAR RIOT — Cinematic Global Confectionery',
    template: '%s | SUGAR RIOT',
  },
  description: 'Premium international confectionery curated with surgical precision. From Tokyo to Tennessee, the world in every piece.',
  openGraph: {
    title: 'SUGAR RIOT — Cinematic Global Confectionery',
    description: 'The world vault for artisanal, luxury sweets. Experience confectionery without borders.',
    url: 'https://sugarriot.com',
    siteName: 'SUGAR RIOT',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SUGAR RIOT',
    description: 'Luxury Global Confectionery',
    creator: '@sugarriot',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--sr-void)] selection:bg-[var(--sr-riot)] selection:text-white">
        <div className="noise-overlay" />
        <CartProvider>
          <SmoothScroll>
            <CustomCursor />
            <Header />
            <CartDrawer />
            <main className="relative z-10">{children}</main>
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}

