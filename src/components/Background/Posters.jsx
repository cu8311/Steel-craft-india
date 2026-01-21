import React from 'react';
import styles from './posters.module.css';

const Posters = () => {

  const posters = [
    {
      id: 1,
      title: "Manufacturing Excellence",
      image: "/poster1.jpeg",
    },
    {
      id: 2,
      title: "Quality Assurance",
      image: "/poster1.jpeg",
    },
    {
      id: 3,
      title: "Innovation",
      image: "/poster1.jpeg",
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.imageRow}>
        {posters.map((poster) => (
          <div key={poster.id} className={styles.imageWrapper}>
            <img
              src={poster.image}
              alt={poster.title}
              className={styles.landscapeImage}
            />
            <div className={styles.imageOverlay}>
              <h3 className={styles.imageTitle}>{poster.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posters;
