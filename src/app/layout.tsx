import type { Metadata } from 'next';
import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Artem Koziar — Principal Software Engineer',
  description:
    'Freelance development and consultancy — helping teams collaborate and work better together, streamline workflow, and deliver quality websites and applications',
  keywords: [
    'front-end',
    'software engineer',
    'consultant',
    'React',
    'Angular',
    'TypeScript',
    'JavaScript',
  ],
  authors: [{ name: 'Artem Koziar' }],
  creator: 'Artem Koziar',
  themeColor: '#505050',
  manifest: '/manifest.json',
  icons: {
    icon: '/i/icons/favicon.ico',
    apple: '/i/icons/icon-152x152.png',
  },
};

/**
 * Root Layout Component
 *
 * Wraps all pages with common layout elements
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* PWA meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Artem Koziar" />
        <meta name="msapplication-TileImage" content="/i/icons/icon-144x144.png" />
        <meta name="msapplication-TileColor" content="#505050" />

        {/* Custom fonts */}
        <style>{`
          @font-face {
            font-family: 'WeberHandITCStd';
            src: url('/i/fonts/WeberHandITCStd.woff2') format('woff2'),
                 url('/i/fonts/WeberHandITCStd.woff') format('woff'),
                 url('/i/fonts/WeberHandITCStd.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
        `}</style>

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-59357319-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-59357319-1');
            `,
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        {/* Service Worker Registration (keep existing) */}
        <script src="/i/service-worker-registration.js" async />
      </body>
    </html>
  );
}
