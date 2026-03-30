import React from 'react';
import styles from "./not-found-page.module.css";
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className={styles.notFoundPage}>
      {/* Decorative Elements */}
      <div className={`${styles.circleDecoration} ${styles.circle1}`}></div>
      <div className={`${styles.circleDecoration} ${styles.circle2}`}></div>
      <div className={`${styles.circleDecoration} ${styles.circle3}`}></div>

      {/* Content */}
      <div className={styles.notFoundContent}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.errorTitle}>Page Not Found</h1>
        <p className={styles.errorDescription}>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <Link to="/" className={`${styles.btn} ${styles.btnPrimary}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Go to Homepage
          </Link>

          <Link to="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <div className={styles.quickLinksTitle}>Popular Pages</div>
          <div className={styles.linksGrid}>
            <Link to="/industries" className={styles.quickLink}>Industries</Link>
            <Link to="/manufacturing" className={styles.quickLink}>Manufacturing</Link>
            <Link to="/buyer" className={styles.quickLink}>Buyer Info</Link>
          </div>
        </div>
      </div>
    </div>
  );
}