import React from "react";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // 格式化分类名称
  const formatCategory = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const formatRegion = (region) => {
    return region
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className={styles["product-card"]} onClick={handleClick}>
      <div className={styles["product-image-container"]}>
        <img
          src={product.image}
          alt={product.name}
          className={styles["product-image"]}
        />
        {product.rating >= 4.8 && (
          <span className={styles["tag"]}>Traveller's Choice</span>
        )}
      </div>

      <div className={styles["product-content"]}>
        <div className={styles["product-meta"]}>
          <span className={styles["product-category"]}>
            {formatCategory(product.category)}
          </span>{" "}
          •
          <span className={styles["product-location"]}>
            {formatRegion(product.region)}
          </span>
        </div>
        <h3 className={styles["product-title"]}>{product.name}</h3>
        <div className={styles["rating-container"]}>
          <span className={styles["rating"]}>★ {product.rating}</span>
          <span className={styles["reviews"]}>({product.reviews} reviews)</span>
        </div>
        <p className={styles["product-price"]}>From RM {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;


