import React from "react";
import ProductCard from "../common/ProductCard";
import styles from "./ProductGrid.module.css";

const ProductGrid = ({ products }) => {
    if (!products || products.length === 0)  {
    return <p>No products found.</p>;
  }


  return (
    <div className={styles["product-grid"]}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

