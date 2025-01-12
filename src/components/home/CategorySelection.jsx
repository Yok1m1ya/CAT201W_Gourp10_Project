import React from "react";
import styles from "./CategorySelection.module.css";
import categories from "../../data/categories.json";
import { useNavigate } from "react-router-dom";

const CategorySelection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/browse?category=${category}`);
  };

  return (
    <div className={styles["category-section-container"]}>
      <h2 className={styles["section-title"]}>Discover More?</h2>
     <div className={styles["category-section"]}>
      {categories.map((category, index) => (
        <div
          key={index}
          className={styles["category-card"]}
          onClick={() => handleCategoryClick(category.categoryKey)}
        >
          <img
            src={category.icon}
            alt={category.name}
            className={styles["category-icon"]}
          />
          <p className={styles["category-name"]}>{category.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CategorySelection;
