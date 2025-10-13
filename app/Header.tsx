import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, User, Droplet, ChevronRight } from 'lucide-react';
import bottleSage from '@/public/cream.jpg';
import bottleNavy from '@/public/cream.jpg';

const navLinksLeft = ['Bottles', 'Pitchers', 'Shop all'];
const navLinksRight = ['Technology', 'Water quality'];

const trendingProducts = [
  {
    id: 1,
    name: 'LARQ Bottle PureVis™ 2',
    price: '$114',
    badge: 'NEW',
    image: bottleSage,
  },
  {
    id: 2,
    name: 'LARQ Bottle PureVis™',
    price: '$85',
    badge: null,
    image: bottleNavy,
  },
];

const collections = [
  {
    id: 1,
    name: 'Smart bottles',
    description: 'Purify. Track. Self-cleaning.',
  },
  {
    id: 2,
    name: 'Filtration bottles',
    description: 'Revolutionary portable water filtration system.',
  },
  {
    id: 3,
    name: 'Everyday drinkware',
    description: 'Hydrate effortlessly on the go.',
  },
  {
    id: 4,
    name: 'Pitchers',
    description: 'Equip your home with Nano Zero filtration.',
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '16px 8vw',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    background: 'linear-gradient(90deg, #fff8f4 0%, #f6f9fd 60%, #e9f5fc 100%)',
    borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
    boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.05)',
  };

  const megaMenuStyles: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    background: 'linear-gradient(90deg, #fff8f4 0%, #f6f9fd 60%, #e9f5fc 100%)',
    borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
    boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
  };

  return (
    <header style={headerStyles}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Left section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#0a2342',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <ul
            style={{
              display: 'flex',
              gap: '32px',
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
            className="hidden-mobile"
          >
            {navLinksLeft.map((link) => (
              <motion.li
                key={link}
                whileHover={{ scale: 1.08 }}
                style={{
                  cursor: 'pointer',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#0a2342',
                  border: '1px solid transparent',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid #0a2342';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid transparent';
                }}
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Centered logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '20px',
            fontWeight: 'bold',
            letterSpacing: '0.15em',
            color: '#0a2342',
            margin: 0,
          }}
        >
          LARQ
        </motion.h1>

        {/* Right section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
            className="hidden-mobile"
          >
            {navLinksRight.map((link) => (
              <motion.li
                key={link}
                whileHover={{ scale: 1.08 }}
                style={{
                  cursor: 'pointer',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#0a2342',
                  border: '1px solid transparent',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid #0a2342';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid transparent';
                }}
              >
                {link}
              </motion.li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {[Droplet, User, ShoppingCart].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                style={{
                  padding: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(229, 231, 235, 0.5)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                }}
              >
                <Icon style={{ width: '20px', height: '20px', color: '#0a2342' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={megaMenuStyles}
          >
            <div style={{ padding: '32px 8vw', maxHeight: '80vh', overflowY: 'auto' }}>
              {/* Mobile navigation links */}
              <ul
                className="mobile-only"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  marginBottom: '32px',
                  listStyle: 'none',
                  padding: 0,
                }}
              >
                {[...navLinksLeft, ...navLinksRight].map((link) => (
                  <motion.li
                    key={link}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      cursor: 'pointer',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontWeight: 600,
                      color: '#0a2342',
                      border: '1px solid transparent',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.border = '1px solid #0a2342';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.border = '1px solid transparent';
                    }}
                  >
                    {link}
                  </motion.li>
                ))}
              </ul>

              {/* Now Trending Section */}
              <div style={{ marginBottom: '48px' }}>
                <h2
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    letterSpacing: '0.05em',
                    color: '#0a2342',
                    marginBottom: '24px',
                    textTransform: 'uppercase',
                  }}
                >
                  Now Trending
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '24px',
                  }}
                >
                  {trendingProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setMenuOpen(false)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div
                        style={{
                          background: 'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)',
                          borderRadius: '16px',
                          padding: '24px',
                          marginBottom: '12px',
                          aspectRatio: '1',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {product.badge && (
                          <span
                            style={{
                              position: 'absolute',
                              top: '12px',
                              left: '12px',
                              fontSize: '10px',
                              fontWeight: 'bold',
                              letterSpacing: '0.05em',
                              color: '#2563eb',
                              textTransform: 'uppercase',
                            }}
                          >
                            {product.badge}
                          </span>
                        )}
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          src={product.image.src}
                          alt={product.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            transition: 'transform 0.3s',
                          }}
                        />
                      </div>
                      <h3 style={{ fontWeight: 600, fontSize: '14px', color: '#0a2342', marginBottom: '4px' }}>
                        {product.name}
                      </h3>
                      <p style={{ fontSize: '14px', color: '#0a2342' }}>{product.price}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Collections Section */}
              <div>
                <h2
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    letterSpacing: '0.05em',
                    color: '#0a2342',
                    marginBottom: '24px',
                    textTransform: 'uppercase',
                  }}
                >
                  Collections
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '16px',
                  }}
                >
                  {collections.map((collection) => (
                    <motion.div
                      key={collection.id}
                      whileHover={{ x: 4 }}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        cursor: 'pointer',
                        padding: '16px 0',
                        borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <div>
                          <h3
                            style={{
                              fontWeight: 'bold',
                              fontSize: '16px',
                              color: '#0a2342',
                              marginBottom: '4px',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.textDecoration = 'underline';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.textDecoration = 'none';
                            }}
                          >
                            {collection.name}
                          </h3>
                          <p style={{ fontSize: '14px', color: '#6b7280' }}>{collection.description}</p>
                        </div>
                        <motion.div whileHover={{ x: 4 }}>
                          <ChevronRight style={{ width: '20px', height: '20px', color: '#0a2342' }} />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          @media (max-width: 1024px) {
            .hidden-mobile {
              display: none !important;
            }
            .mobile-only {
              display: flex !important;
            }
          }
          @media (min-width: 1025px) {
            .mobile-only {
              display: none !important;
            }
          }
        `}
      </style>
    </header>
  );
}
