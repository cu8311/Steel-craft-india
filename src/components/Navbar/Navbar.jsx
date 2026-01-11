import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from "./navbar.module.css"
import useLockBodyScroll from '../hooks/useLockBodyScroll'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { name: 'Home', type: 'route', to: '/' },
    { name: 'Products', type: 'hash', href: '#products' },
    { name: 'Industries', type: 'hash', href: '#industries' },
    { name: 'Buyer Information', type: 'route', to: '/buyer' },
    { name: 'Manufacturing Process', type: 'route', to: '/manufacturing' },
    { name: 'About Us', type: 'route', to: '/about' },
    { name: 'Certificates', type: 'route', to: '/certificates' },
  ]

  const scrollToHash = (hash) => {
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useLockBodyScroll(mobileMenuOpen)

  useEffect(() => {
    // Check for hash in URL on initial load
    const hash = location.hash;
    if (hash && hash !== '#') {
      setTimeout(() => {
        scrollToHash(hash);
      }, 100);
    }
  }, [location.pathname, location.hash]);

  const handleHashClick = (href, e) => {
    e.preventDefault();

    const hash = href.includes('#') ? href.substring(href.indexOf('#')) : href;

    // If we're already on the home page, just scroll
    if (pathname === '/' && href.startsWith('#')) {
      scrollToHash(hash);
    } else {
      // Navigate to the home page first, then scroll
      navigate('/');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        scrollToHash(hash);
      }, 150);
    }
  }

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          {/* Logo Section */}
          <div className={styles.logoSection} onClick={() => navigate('/')}>
            <img
              src="/logo.jpeg"
              alt="Steel Craft India Logo"
              className={styles.logoImage}
            />
            <div className={styles.companyInfo}>
              <div className={styles.companyName}>Steel Craft India</div>
              <div className={styles.companyTagline}>Precision Hydraulic Solutions</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.navDesktop}>
            {navItems.slice(0, -1).map((item, index) =>
              item.type === 'route' ? (
                <Link
                  key={index}
                  to={item.to}
                  className={styles.navLink}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className={styles.navLink}
                  onClick={(e) => handleHashClick(item.href, e)}
                >
                  {item.name}
                </a>
              )
            )}
            <button
              className={styles.ctaButton}
              onClick={() => navigate('/request')}
            >
              Request Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.mobileMenuButton} ${mobileMenuOpen ? styles.open : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={styles.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.open : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation */}
      <nav className={`${styles.navMobile} ${mobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileNavLinks}>
          {navItems.map((item, index) => (
            item.type === 'route' ? (
              <Link
                key={index}
                to={item.to}
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={index}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={(e) => {
                  setMobileMenuOpen(false)
                  handleHashClick(item.href, e)
                }}
              >
                {item.name}
              </a>
            )
          ))}
          <button
            className={`${styles.ctaButton} ${styles.mobileCta}`}
            onClick={() => {
              setMobileMenuOpen(false);
              setTimeout(() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }}
          >
            Request Quote
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar