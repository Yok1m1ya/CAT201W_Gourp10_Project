import React from 'react';
import styles from './RegionCard.module.css';
import regions from '../../data/regions.json';

const RegionCard = ({ region }) => {
  if (!region || region === 'all') {
    return null;
  }

  const regionData = regions.find(r => r.key === region);
  if (!regionData) {
    return null;
  }

  return (
    <div className={styles["regionCard"]}>
      <div className={styles["content"]}>
        <h2 className={styles["title"]}>{regionData.name}</h2>
        <p className={styles["description"]}>
          {regionData.description}
        </p>
        <div className={styles["infoGrid"]}>
          <div className={styles["infoItem"]}>
            <h3>Best time to visit</h3>
            <div className={styles["infoValue"]}>
              {regionData.bestTime}
              <div className={styles["infoDetail"]}>{regionData.bestTimeDetail}</div>
            </div>
          </div>
          <div className={styles["infoItem"]}>
            <h3>Recommended trip duration</h3>
            <div className={styles["infoValue"]}>{regionData.duration}</div>
          </div>
        </div>
      </div>
      <div className={styles["image"]}>
        <img src={regionData.image} alt={regionData.name} />
      </div>
    </div>
  );
};

export default RegionCard;