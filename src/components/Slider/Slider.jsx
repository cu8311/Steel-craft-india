import React, { useState, useEffect, useRef } from 'react';
import styles from './slider.module.css';

export default function Slider() {
  const scrollRef = useRef(null);
  const scrollAmountRef = useRef(0);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const products = [
    {
      id: 1,
      image: '/slide1.PNG',
      title: 'Hydraulic Adapter',
    },
    {
      id: 2,
      image: '/slide2.PNG',
      title: 'Bend Fittings',
    },
    {
      id: 3,
      image: '/slide3.PNG',
      title: 'Hydraulic Nipples',
    },
    {
      id: 4,
      image: '/slide4.PNG',
      title: 'Hydraulic Nuts',
    },
    {
      id: 5,
      image: '/slide5.PNG',
      title: 'Hydraulic Caps',
    },
    {
      id: 6,
      image: '/slide6.PNG',
      title: 'Fitting Sets',
    },
    {
      id: 7,
      image: '/slide7.PNG',
      title: 'Custom Fittings',
    }
  ];

  // Duplicate products for seamless loop
  const duplicatedProducts = [...products, ...products];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 1; // pixels per frame

    const scroll = () => {
      if (!isPaused) {
        scrollAmountRef.current += scrollSpeed;

        // Reset scroll when we've scrolled through one set of products
        if (scrollAmountRef.current >= scrollContainer.scrollWidth / 2) {
          scrollAmountRef.current = 0;
        }

        scrollContainer.scrollLeft = scrollAmountRef.current;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    // Start the animation loop
    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []); // Empty dependency array - animation loop runs continuously

  return (
    <>

      <section className={styles.showcaseSection}>
        {/* Scrolling Container */}
        <div className={styles.scrollWrapper} style={{ position: 'relative' }}>
          <div className={styles.gradientLeft}></div>
          <div className={styles.gradientRight}></div>

          <div
            ref={scrollRef}
            className={styles.scrollContainer}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedProducts.map((product, index) => (
              <div key={`${product.id}-${index}`} className={styles.productCard}>
                <div className={styles.cardImageWrapper}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.cardImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}