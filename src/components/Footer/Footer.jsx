import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './footer.module.css';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const quickLinks = [
    { name: 'Home', type: 'route', to: '/' },
    { name: 'Products', type: 'hash', href: '#products' },
    { name: 'Industries', type: 'route', to: '/industries' },
    { name: 'Buyer Information', type: 'route', to: '/buyer' },
    { name: 'Manufacturing Process', type: 'route', to: '/manufacturing' },
    { name: 'About Us', type: 'route', to: '/about' },
    { name: 'Certificates', type: 'route', to: '/certificates' },
    { name: 'Request Quote', type: 'hash', href: '#request-quote' }
  ];

  const scrollToHash = (hash) => {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBg}></div>
      <div className={styles.footerOverlay}></div>

      <div className={styles.footerMain}>
        <div className={styles.footerGrid}>

          {/* Company Info */}
          <div className={styles.footerCompany}>
            <div className={styles.footerLogo}>
              <img
                src="/logo.jpeg"
                alt="Steel Craft India"
                className={styles.logoImage}
              />
              <div className={styles.logoText}>Steel Craft</div>
            </div>

            <p className={styles.footerDescription}>
              Steel Craft India is a leading manufacturer of precision hydraulic hose fittings
              established in 2001. We specialize in producing high-quality hydraulic end fittings
              that deliver reliable performance in demanding industrial conditions.
            </p>

            <div className={styles.footerTagline}>
              Precision Engineering Since 2001
            </div>

            {/* Social Links */}
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}><Facebook /></a>
              <a href="#" className={styles.socialLink}><Linkedin /></a>
              <a href="#" className={styles.socialLink}><Instagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.type === 'route' ? (
                    <Link to={link.to} className={styles.footerLink}>
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className={styles.footerLink}
                      onClick={(e) => handleHashClick(link.href, e)}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerContact}>
            <h3 className={styles.footerTitle}>Manufacturing Unit</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <div className={styles.contactLabel}>Address</div>
                <div className={styles.contactValue}>
                  Steel Craft India<br />
                  B-21, Janta Nagar (Shimlapuri / Street No-4, Guru Nanak Street), Gill Road, Ludhiana, Punjab 141003, India
                </div>
              </li>

              <li className={styles.contactItem}>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.contactValue}>
                  <a href="tel:+919356854656">+91 9356854656</a>
                </div>
              </li>

              <li className={styles.contactItem}>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactValue}>
                  <a href="mailto:steelcraft80@gmail.com">
                    steelcraft80@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className={styles.footerDivider}></div>

        {/* Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            © {currentYear}{' '}
            <span>Steel Craft India</span>. All rights reserved.
          </div>

          <div className={styles.footerCertifications}>
            <span className={styles.certBadge}>ISO Certified</span>
            <span className={styles.certBadge}>MSME Registered</span>
            <span className={styles.certBadge}>ZED Bronze</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
