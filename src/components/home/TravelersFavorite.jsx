import React from "react";
import ProductCard from "../common/ProductCard.jsx";
import products from "../../data/products.json";
import styles from "./TravelersFavorite.module.css";  // 修改这行

const TravelersFavorite = () => {
    const topRatedProducts = products.filter((product) => product.rating >= 4.8);
  
    return (
      <section className={styles["travelers-favorite"]}>
        <h2>Travelers' Favorite</h2>
        <div className={styles["product-list"]}>
          {topRatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
  };
  
  export default TravelersFavorite;
