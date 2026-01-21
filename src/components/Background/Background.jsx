import React from 'react';
import styles from './background.module.css';

const Background = () => {
  return (
    <section className={styles.backgroundSection}>
      <div className={styles.backgroundContainer}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.overlay}></div>
      </div>
    </section>
  );
};

export default Background;