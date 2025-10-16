'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribe:', email);
  };

  const navigationLinks = {
    column1: [
      { label: 'Our story', href: '#' },
      { label: 'Reviews', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Press', href: '#' },
    ],
    column2: [
      { label: 'FAQ', href: '#' },
      { label: 'Basq magazine', href: '#' },
      { label: 'Find a retailer', href: '#' },
      { label: 'Exclusive Perks', href: '#' },
    ],
    column3: [
      { label: 'Wholesale', href: '#' },
      { label: 'Ambassador program', href: '#' },
      { label: 'Affiliate program', href: '#' },
      { label: 'Corporate gifting', href: '#' },
    ],
  };

  const legalLinks = [
    { label: 'Terms', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'Accessibility', href: '#' },
    { label: 'Patents', href: '#' },
    { label: 'Do not sell my personal information', href: '#' },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-amber-50 via-blue-50 to-purple-50 pt-16 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Left Section - Newsletter */}
          <div className="lg:col-span-3">
            <h2
              className="text-3xl font-bold text-blue-900 mb-6"
              style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.05em' }}
            >
              KENKOHOMU
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Receive exclusive offers, hydration news, and more when you subscribe.
            </p>

            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-200 overflow-hidden">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 text-sm outline-none bg-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-2 py-3 text-sm font-medium text-blue-900 hover:text-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {Object.values(navigationLinks).map((column, i) => (
              <div key={i} className="space-y-4">
                {column.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm text-gray-600 hover:text-blue-900 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Corporate Gifting Card */}
          <div className="lg:col-span-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden shadow-lg h-64 md:h-80 lg:h-full"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80)',
                  filter: 'brightness(0.7)',
                }}
              />
              <div className="relative h-full flex flex-col justify-between p-6 md:p-8 text-white">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Corporate gifting</h3>
                  <p className="text-sm md:text-base opacity-90">
                    Originality never goes out of style
                  </p>
                </div>
                <button className="self-start px-6 py-3 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                  Get a quote
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright & Legal Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-xs text-gray-600">
              <span>© KENKOHOMU, 2025</span>
              {legalLinks.map((link, index) => (
                <a key={index} href={link.href} className="hover:text-blue-900 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:border-blue-900 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-700" />
                </a>
              ))}

              {/* TikTok icon */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:border-blue-900 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
