import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, User, Droplet, ChevronRight } from 'lucide-react';
import logoImage from '@/public/logo-kenko.svg';

const navLinksLeft = ['Bottles', 'Pitchers', 'Shop all'];
const navLinksRight = ['Technology', 'Water quality'];

const trendingProducts = [
  {
    id: 1,
    name: 'LARQ Bottle PureVis™ 2',
    price: '$114',
    badge: 'NEW',
    Image: '/cream.jpg',
  },
  {
    id: 2,
    name: 'LARQ Bottle PureVis™',
    price: '$85',
    badge: null,
    Image: '/cream.jpg',
  },
  {
    id: 3,
    name: 'Another Bottle',
    price: '$95',
    badge: null,
    Image: '/cream.jpg',
  },
  {
    id: 4,
    name: 'LARQ Bottle PureVis™ 2',
    price: '$114',
    badge: 'NEW',
    Image: '/cream.jpg',
  },
  {
    id: 5,
    name: 'LARQ Bottle PureVis™',
    price: '$85',
    badge: null,
    Image: '/cream.jpg',
  },
  {
    id: 6,
    name: 'Another Bottle',
    price: '$95',
    badge: null,
    Image: '/cream.jpg',
  },
];

const slideVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};


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

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const headerStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '16px 8vw',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    background:
      'linear-gradient(270deg, rgba(246,157,36,0.1) 2%, rgba(206,147,66,0.1) 6%, rgba(105,122,141,0.1) 16%, rgba(56,110,179,0.1) 21%, rgba(254,199,8,0.1) 34%, rgba(76,181,116,0.1) 51%, rgba(102,174,141,0.1) 67%, rgba(105,174,223,0.1) 68%, rgba(139,148,183,0.1) 72%, rgba(189,111,126,0.1) 78%, rgba(221,88,90,0.1) 82%, rgba(223,80,77,0.1) 84%, rgba(238,112,59,0.1) 90%, rgba(243,114,42,0.1) 96%, rgba(246,157,36,0.1) 100%)',
    borderBottom: '1px solid rgba(229,231,235,0.5)',
    boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
  };

  const linkStyle: React.CSSProperties = {
    cursor: 'pointer',
    padding: '4px 12px',
    borderRadius: '6px',
    fontWeight: 600,
    fontSize: '14px',
    color: '#063970',
    transition: 'transform 0.2s ease, color 0.2s ease',
  };

  const iconButtonStyle: React.CSSProperties = {
    padding: '8px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.8)',
    border: '1px solid rgba(229,231,235,0.5)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s ease, background-color 0.2s ease',
  };

  const megaMenuStyles: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    background: 'linear-gradient(90deg, #fff8f4 0%, #f6f9fd 60%, #e9f5fc 100%)',
    borderBottom: '1px solid rgba(229,231,235,0.5)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    overflow: 'hidden',
  };

  return (
    <header style={headerStyles}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* LEFT SECTION */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Hamburger + Text on Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-only"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#063970',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
            <span className="mobile-only" style={{ fontWeight: 700, fontSize: '18px', color: '#063970' }}>
              KENKOHOMU
            </span>
          </button>

          {/* Left Nav Links */}
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
              <motion.li key={link} whileHover={{ scale: 1.08 }} style={linkStyle}>
                {link}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* LOGO - only visible on desktop */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'static',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '100%',
            width: 'auto',
          }}
          className="hidden-mobile"
        >
          <img src={logoImage.src} alt="KenkoHomu Logo" style={{ height: '80px', width: 'auto', objectFit: 'cover' }} />
        </motion.div>

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
              <motion.li key={link} whileHover={{ scale: 1.08 }} style={linkStyle}>
                {link}
              </motion.li>
            ))}
          </ul>

          {/* Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {[Droplet, User, ShoppingCart].map((Icon, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} style={iconButtonStyle}>
                <Icon style={{ width: '20px', height: '20px', color: '#063970' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE MEGAMENU */}
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      style={megaMenuStyles}
    >
      <div style={{ padding: '24px 8vw', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Now Trending Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '48px' }}
        >
          <h2
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              letterSpacing: '0.05em',
              color: '#0a2342',
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}
          >
            Now Trending
          </h2>

          <div style={{ overflowX: 'hidden' }}>
            <motion.div
              drag="x"
              dragConstraints={{
                left: -((trendingProducts.length - 1) * 220),
                right: 0,
              }}
              style={{
                display: 'flex',
                gap: '16px',
                cursor: 'grab',
                paddingBottom: '8px',
              }}
            >
              {trendingProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1, // staggered animation
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    width: '220px',
                    minWidth: '220px',
                    height: '280px',
                    background: 'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)',
                    borderRadius: '16px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
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
                    src={product.Image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '60%',
                      objectFit: 'contain',
                    }}
                  />
                  <div style={{ textAlign: 'center' }}>
                    <h3 style={{ fontWeight: 600, fontSize: '14px', color: '#0a2342' }}>{product.name}</h3>
                    <p style={{ fontSize: '14px', color: '#0a2342' }}>{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Collections Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
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
                style={{
                  cursor: 'pointer',
                  padding: '16px',
                  border: '1px solid rgba(229,231,235,0.5)',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
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
                    >
                      {collection.name}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6b7280' }}>{collection.description}</p>
                  </div>
                  <ChevronRight style={{ width: '20px', height: '20px', color: '#0a2342' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
