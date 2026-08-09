import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SITE_METADATA } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${SITE_METADATA.name} — ${SITE_METADATA.tagline}`,
  description: SITE_METADATA.description,
  keywords: [
    'Wellness Retreat Goa',
    'Conscious Living India',
    'Neuroscience and Ancient Wisdom',
    'Vipassana Meditation',
    'Kundalini Activation',
    'Epigenetics Wellness',
    'Goa Confluence Expo 2026',
    'Inner Latitude',
  ],
  authors: [{ name: 'Inner Latitude Team' }],
  openGraph: {
    title: `${SITE_METADATA.name} — ${SITE_METADATA.tagline}`,
    description: SITE_METADATA.description,
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans selection:bg-[var(--accent-gold)] selection:text-white">
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col justify-between">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
