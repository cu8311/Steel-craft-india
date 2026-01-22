import React from 'react';
import styles from './posters.module.css';

const Posters = () => {

  const posters = [
    {
      id: 1,
      image: "/poster1.jpeg",
    },
    {
      id: 2,
      image: "/poster2.png",
    },
    {
      id: 3,
      image: "/poster3.png",
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.imageRow}>
        {posters.map((poster) => (
          <div key={poster.id} className={styles.imageWrapper}>
            <img
              src={poster.image}
              alt={poster.id}
              className={styles.landscapeImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posters;
