import React from 'react';
import ProductCard from '../common/ProductCard';
import products from '../../data/products.json';
import styles from './TopSeller.module.css';

const TopSeller = () => {
    // Sort products by sales and get top 5
    const topProducts = [...products]
      .sort((a, b) => b.sales - a.sales)
      .slice(0, 5);
  
    return (
      <div className={styles["container"]}>
        <div className={styles["wrapper"]}>
          <h2 className={styles["title"]}>Top Sellers</h2>
          <div className={styles["productsGrid"]}>
            {topProducts.map((product, index) => (
              <div key={product.id} className={styles["productWrapper"]}>
                <div className={styles["rankBadge"]}>
                  #{index + 1}
                </div>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className={styles["buttonContainer"]}>
            <button className={styles["moreButton"]}>
              More Rankings
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TopSeller;
