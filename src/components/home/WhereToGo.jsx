import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WhereToGo.module.css";
import regions from "../../data/regions.json";

const WhereToGo = () => {
  const navigate = useNavigate();

  const handleRegionClick = (region) => {
    // 确保 region 参数正确设置
    navigate(`/browse?region=${encodeURIComponent(region)}`);
  };

  return (
    <div className={styles["where-to-go-section"]}>
      <h2>Where to next?</h2>
      <div className={styles["region-grid"]}>
        {regions.map((region, index) => (
          <div
            key={index}
            className={styles["region-card"]}
            onClick={() => handleRegionClick(region.key)}
          >
            <img
              src={region.image}
              alt={region.name}
              className={styles["region-image"]}
            />
            <div className={styles["region-name"]}>{region.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhereToGo;


