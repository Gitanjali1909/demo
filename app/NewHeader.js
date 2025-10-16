import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Heart, ChevronRight, Search } from 'lucide-react';

const navLinks = ['Bottles', 'Pitchers', 'Shop all', 'Technology', 'Water quality'];

const trendingProducts = [
  {
    id: 1,
    name: 'LARQ Bottle PureVis™ 2',
    price: '$114',
    badge: 'NEW',
    image: '/cream.jpg',
  },
  {
    id: 2,
    name: 'LARQ Bottle PureVis™',
    price: '$85',
    badge: null,
    image: '/cream.jpg',
  },
  {
    id: 3,
    name: 'Premium Water Bottle',
    price: '$95',
    badge: null,
    image: '/cream.jpg',
  },
  {
    id: 4,
    name: 'LARQ Bottle PureVis™ 2',
    price: '$114',
    badge: 'BESTSELLER',
    image: '/cream.jpg',
  },
  {
    id: 5,
    name: 'LARQ Bottle Movement',
    price: '$85',
    badge: null,
    image: '/cream.jpg',
  },
  {
    id: 6,
    name: 'Filtered Water Bottle',
    price: '$95',
    badge: null,
    image: '/cream.jpg',
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

const exploreLinks = [
  'Our Technology',
  'Sustainability',
  'Reviews',
  'About Us',
];

const footerLinks = [
  { name: 'Login', href: '/login' },
  { name: 'Gifting', href: '/gifting' },
  { name: 'FAQ', href: '/faq' },
];

export default function NewHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [favoriteCount] = useState(3);
  const [cartCount] = useState(2);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const scrollContainerRef = useState(null);

  const totalCards = trendingProducts.length;
  const currentDot = Math.round(scrollPosition / 280); // 280px = card width + gap

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  // Detect small screens and update state
  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 1024);
    }
    handleResize(); // call once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };


  const headerContentStyle = {
    ...styles.headerContent,
    ...(isSmallScreen ? { justifyContent: 'space-between' } : { justifyContent: 'center' }),
  };

  return (
    <>
      <header style={styles.header}>
        <div style={headerContentStyle} className="headerContent" >
          {/* Logo */}
          <div style={styles.logo}>
            <img src="/logo-kenko.svg" alt="KenkoHomu" style={styles.logoImage} />
          </div>

          {/* Desktop Nav Links */}
          <nav style={styles.nav} className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link} href="#" style={styles.navLink} className="nav-link-hover">
                {link}
              </a>
            ))}
          </nav>

          {/* Icons Section */}
          <div style={styles.icons}>
            {/* Search Bar - Expandable */}
            <AnimatePresence>
              {searchOpen ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={styles.searchBar}
                >
                  <Search style={styles.searchIcon} size={16} />
                  <input
                    type="text"
                    placeholder="Search..."
                    style={styles.searchInput}
                    autoFocus
                  />
                  <button onClick={toggleSearch} style={styles.searchClose}>
                    <X size={16} />
                  </button>
                </motion.div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={toggleSearch}
                  style={styles.iconButton}
				  className="search-icon-button"
                >
                  <Search size={22} />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Heart Icon with Badge */}
            <motion.div whileHover={{ scale: 1.1 }} style={styles.iconWrapper}>
  <button style={styles.iconButton}>
    <Heart size={22} />
    <span style={styles.badge}>0</span>
  </button>
</motion.div>

{/* Cart Icon with Badge */}
<motion.div whileHover={{ scale: 1.1 }} style={styles.iconWrapper}>
  <button style={styles.iconButton}>
    <ShoppingCart size={22} />
    <span style={styles.badge}>0</span>
  </button>
</motion.div>

            {/* Hamburger Menu - Mobile Only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={styles.hamburger}
              className="mobile-hamburger"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MEGAMENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={styles.megamenu}
          >
            <div style={styles.megamenuContent}>
              {/* Now Trending Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 style={styles.sectionTitle}>Now Trending</h2>

                <div style={styles.productsScroll} onScroll={handleScroll}>
                  {trendingProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 + index * 0.05,
                      }}
                      whileHover={{ y: -4 }}
                      style={styles.productCard}
                    >
                      {product.badge && (
                        <span style={styles.productBadge}>{product.badge}</span>
                      )}
                      <div style={styles.productImageWrapper}>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={styles.productImage}
                        />
                      </div>
                      <div style={styles.productInfo}>
                        <h3 style={styles.productName}>{product.name}</h3>
                        <p style={styles.productPrice}>{product.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Dot Indicators */}
                <div style={styles.dotContainer}>
                  {Array.from({ length: Math.ceil(totalCards / 1) }).map((_, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.dot,
                        ...(index === currentDot ? styles.dotActive : {}),
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              <div style={styles.divider} />

              {/* Collections Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 style={styles.sectionTitle}>Collections</h2>
                <div style={styles.listSection}>
                  {collections.map((collection) => (
                    <div
                      key={collection.id}
                      style={styles.listItem}
                      className="list-item-hover"
                    >
                      <div>
                        <h3 style={styles.listItemTitle}>{collection.name}</h3>
                        <p style={styles.listItemDesc}>{collection.description}</p>
                      </div>
                      <ChevronRight style={styles.chevron} size={20} />
                    </div>
                  ))}
                </div>
              </motion.div>

              <div style={styles.divider} />

              {/* Explore Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 style={styles.sectionTitle}>Explore</h2>
                <div style={styles.listSection}>
                  {exploreLinks.map((link) => (
                    <div
                      key={link}
                      style={styles.listItem}
                      className="list-item-hover"
                    >
                      <span style={styles.listItemSingle}>{link}</span>
                      <ChevronRight style={styles.chevron} size={20} />
                    </div>
                  ))}
                </div>
              </motion.div>

              <div style={styles.divider} />

              {/* Footer Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={styles.footerLinks}
              >
                {footerLinks.map((link) => (
                  <a key={link.name} href={link.href} style={styles.footerLink}>
                    {link.name}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
        }
        
        @media (min-width: 1025px) {
          .mobile-hamburger {
            display: none !important;
          }
        }

		@media (max-width: 768px) {
  .search-icon-button {
    display: none !important;
  }
}

        
        .list-item-hover {
          transition: color 0.2s ease;
        }
        
        .list-item-hover:hover h3,
        .list-item-hover:hover span,
        .list-item-hover:hover p {
          color: hsl(215, 16%, 47%) !important;
        }
        
        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: hsl(0, 72%, 51%);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link-hover:hover {
          color: hsl(0, 72%, 51%) !important;
        }
        
        .nav-link-hover:hover::after {
          width: 100%;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  },
  headerContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 24px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
    gap: '25px',
  },
  logo: {
    flexShrink: 0,
  },
  logoImage: {
    height: '70px',
    width: 'auto',
    display: 'center',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  navLink: {
    color: 'hsl(210, 24%, 16%)',
    fontSize: '15px',
    fontWeight: 400,
    textDecoration: 'none',
    position: 'relative',
    padding: '4px 0',
    transition: 'color 0.3s ease',
    whiteSpace: 'nowrap',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexShrink: 0,
  },
  searchBar: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    background: 'hsl(210, 17%, 95%)',
    borderRadius: '24px',
    padding: '8px 16px',
    overflow: 'hidden',
  },
  searchIcon: {
    color: 'hsl(215, 16%, 47%)',
    marginRight: '8px',
    flexShrink: 0,
  },
  searchInput: {
    border: 'none',
    background: 'transparent',
    outline: 'none',
    fontSize: '14px',
    color: 'hsl(210, 24%, 16%)',
    width: '60%',
    fontFamily: 'inherit',
  },
  searchClose: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'hsl(215, 16%, 47%)',
    marginLeft: '8px',
  },
  iconButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'hsl(210, 24%, 16%)',
    transition: 'color 0.2s ease',
    position: 'relative',
  },
  iconWrapper: {
    position: 'relative',
    cursor: 'pointer',
  },
  badge: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    background: 'hsl(0, 72%, 51%)',
    color: 'white',
    fontSize: '11px',
    fontWeight: 600,
    padding: '2px 6px',
    borderRadius: '12px',
    minWidth: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid white',
  },
  hamburger: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'hsl(210, 24%, 16%)',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  megamenu: {
    position: 'fixed',
    top: '64px',
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, hsl(20, 100%, 98%) 0%, hsl(210, 100%, 97%) 60%, hsl(200, 100%, 96%) 100%)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderTop: '1px solid rgba(0, 0, 0, 0.05)',
    overflowY: 'auto',
    overflowX: 'hidden',
    zIndex: 90,
  },
  megamenuContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '48px 24px 64px',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
  },
  sectionTitle: {
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    color: 'hsl(210, 24%, 16%, 0.7)',
    marginBottom: '20px',
    textTransform: 'uppercase',
  },
  productsScroll: {
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    overflowY: 'visible',
    paddingBottom: '8px',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',
    scrollSnapType: 'x mandatory',
  },
  dotContainer: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    marginTop: '16px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'hsl(215, 16%, 47%, 0.3)',
    transition: 'all 0.3s ease',
  },
  dotActive: {
    background: 'hsl(0, 72%, 51%)',
    width: '24px',
    borderRadius: '4px',
  },
  productCard: {
    flexShrink: 0,
    width: '260px',
    background: 'white',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    scrollSnapAlign: 'start',
  },
  productBadge: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '0.05em',
    color: 'hsl(0, 72%, 51%)',
    background: 'hsl(0, 72%, 51%, 0.1)',
    padding: '4px 10px',
    borderRadius: '12px',
    textTransform: 'uppercase',
    zIndex: 10,
  },
  productImageWrapper: {
    width: '100%',
    height: '240px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    overflow: 'hidden',
    borderRadius: '16px',
    background: 'hsl(210, 17%, 95%)',
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  productInfo: {
    textAlign: 'center',
  },
  productName: {
    fontWeight: 600,
    fontSize: '15px',
    color: 'hsl(210, 24%, 16%)',
    marginBottom: '6px',
    lineHeight: '1.4',
  },
  productPrice: {
    fontSize: '15px',
    color: 'hsl(215, 16%, 47%)',
    fontWeight: 500,
  },
  divider: {
    height: '1px',
    background: 'rgba(0, 0, 0, 0.06)',
  },
  listSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  listItem: {
    cursor: 'pointer',
    padding: '16px 20px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 0.2s ease',
    background: 'transparent',
  },
  listItemTitle: {
    fontWeight: 600,
    fontSize: '17px',
    color: 'hsl(210, 24%, 16%)',
    marginBottom: '4px',
  },
  listItemDesc: {
    fontSize: '14px',
    color: 'hsl(215, 16%, 47%)',
    lineHeight: '1.5',
  },
  listItemSingle: {
    fontWeight: 500,
    fontSize: '17px',
    color: 'hsl(210, 24%, 16%)',
  },
  chevron: {
    color: 'hsl(215, 16%, 47%)',
  },
  footerLinks: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    paddingBottom: '16px',
  },
  footerLink: {
    color: 'hsl(215, 16%, 47%)',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 500,
    transition: 'color 0.2s ease',
  },
};
