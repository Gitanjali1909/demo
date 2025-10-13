'use client';
import { useEffect } from 'react';
import './globals.css';
import Header from './Header';
import Footer from './Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header') as HTMLElement;
      if (!header) return;

      if (window.scrollY > 50) {
        header.style.backdropFilter = 'blur(6px)';
        header.style.background =
          'linear-gradient(270deg,rgba(246, 157, 36, 0.1) 2%, rgba(206, 147, 66, 0.1) 6%, rgba(105, 122, 141, 0.1) 16%, rgba(56, 110, 179, 0.1) 21%, rgba(254, 199, 8, 0.1) 34%, rgba(76, 181, 116, 0.1) 51%, rgba(102, 174, 141, 0.1) 67%, rgba(105, 174, 223, 0.1) 68%, rgba(139, 148, 183, 0.1) 72%, rgba(189, 111, 126, 0.1) 78%, rgba(221, 88, 90, 0.1) 82%, rgba(223, 80, 77, 0.1) 84%, rgba(238, 112, 59, 0.1) 90%, rgba(243, 114, 42, 0.1) 96%, rgba(246, 157, 36, 0.1) 100%)';
      } else {
        header.style.backdropFilter = 'blur(0px)';
        header.style.background = 'transparent';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
