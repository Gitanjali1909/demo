'use client';
import { useEffect } from 'react';
import './globals.css';
import Header from './Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header') as HTMLElement;
      if (window.scrollY > 50) {
        header.style.backdropFilter = 'blur(6px)';
        header.style.background = 'linear-gradient(to right, rgba(246,157,36,0.2), rgba(246,157,36,0.25), rgba(173,216,230,0.2), rgba(135,206,235,0.25), rgba(216,191,216,0.2), rgba(148,0,211,0.25))';
      } else {
        header.style.backdropFilter = 'blur(0px)';
        header.style.background = 'linear-gradient(to right, rgba(246,157,36,0.1), rgba(246,157,36,0.15), rgba(173,216,230,0.1), rgba(135,206,235,0.15), rgba(216,191,216,0.1), rgba(148,0,211,0.15))';
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
