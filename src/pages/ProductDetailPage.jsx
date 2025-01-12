import React from "react";
import { useParams } from "react-router-dom";
import productsData from "/src/data/products.json"; // 使用绝对路径
import styles from "./ProductDetailPage.module.css";


const ProductDetailPage = () => {
  const { id } = useParams(); // 获取 URL 参数
  const product = productsData.find((p) => p.id === parseInt(id)); // 根据 ID 匹配产品

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className={styles["product-detail-container"]}>
      <div className={styles["product-detail-left"]}>
        {/* 顶部信息区 */}
        <h1 className={styles["product-name"]}>{product.name}</h1>
        <div className={styles["product-meta"]}>
          <span className={styles["rating"]}>★ {product.rating}</span>
          <span className={styles["reviews"]}>({product.reviews} reviews)</span>
          <span className={styles["dot"]}>•</span>
          <span className={styles["bookings"]}>{product.sales}+ booked</span>
          <span className={styles["dot"]}>•</span>
          <span className={styles["region"]}>{product.regionname}</span>
        </div>

        {/* 主图区域 */}
        <div className={styles["image-container"]}>
          <img 
            src={product.image} 
            alt={product.name} 
            className={styles["product-image"]} 
          />
        </div>

        {/* 亮点区域 */}
        <div className={styles["section"]}>
          <h2 className={styles["section-title"]}>Highlights</h2>
          <ul className={styles["highlights-list"]}>
            {product.highlights.map((highlight, index) => (
              <li key={index} className={styles["highlight-item"]}>
                <span className={styles["bullet"]}>•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* 描述区域 */}
        <div className={styles["section"]}>
          <h2 className={styles["section-title"]}>Description</h2>
          <p className={styles["description"]}>{product.description}</p>
        </div>
      </div>

      <div className={styles["product-detail-right"]}>
        <div className={styles["booking-card"]}>
          <div className={styles["price-section"]}>
            <div className={styles["price-label"]}>From</div>
            <div className={styles["price-amount"]}>RM {product.price}</div>
          </div>
          <button className={styles["book-now-button"]}>Book Now</button>
          <button className={styles["wishlist-button"]}>♡ Save to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

