import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'glightbox/dist/css/glightbox.css';

import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import TopBar from './components/TopBar';
import Header from './components/Header';
import BackToTopBtn from './components/BackToTopBtn';
import Footer from './sections/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Panorama Stage",
  description: "Lakshery Restaraunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    
    <html lang="en">
      <head>
        <link rel="icon" href="/logor.png" />
      </head>
      <body className={playfair.className}>
        <TopBar />
        <Header />
        {children}
        <Footer />
        <BackToTopBtn />
      </body>
      {/* <script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL'
        crossOrigin='anonymous'
      >
      </script> */}
    </html>
  );
}
