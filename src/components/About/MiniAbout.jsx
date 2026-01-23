import React from 'react';
import styles from './mini-about.module.css';
import { useNavigate } from 'react-router-dom';

const MiniAbout = () => {
  const navigate = useNavigate();
  
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutCard}>
          {/* LEFT: CONTENT */}
          <div className={styles.aboutContent}>
            <p className={styles.aboutTag}>ABOUT COMPANY</p>
            <h2 className={styles.aboutTitle}>
              Steel Craft India was established in the year <span>2001</span> in Ludhiana
            </h2>
            <div className={styles.aboutDivider}></div>
            <p className={styles.aboutText}>
              Steel Craft India started with a simple mission — to produce <strong>good quality hydraulic end fittings</strong> that deliver reliable performance in demanding industrial conditions. We began our journey with a single machine and a strong commitment to precision and consistency.
              <br/><br/>
              Through hard work and continuous improvement, we expanded our production capabilities and product range. Today, SCI supplies multiple hydraulic fitting products across <strong>India</strong> and to global markets, trusted for durability, fitment accuracy, and long service life.
            </p>
            <button className={styles.aboutBtn} onClick={() => navigate('/about')}>READ MORE</button>
          </div>

          {/* RIGHT: IMAGE */}
          <div className={styles.aboutImage}>
            <img
              src="/poster1.jpeg"
              alt="Steel Craft India - Manufacturing Facility"
              loading="lazy"
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniAbout;