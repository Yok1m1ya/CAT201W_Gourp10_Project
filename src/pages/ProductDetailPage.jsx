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
        <img src={product.image} alt={product.name} className={styles["product-image"]} />
        <h1>{product.name}</h1>
        <p>Rating: ★ {product.rating} ({product.reviews} reviews)</p>
        <h2>Highlights:</h2>
        <ul>
          {product.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
        <h2>Description:</h2>
        <p>{product.description}</p>
      </div>
      <div className={styles["product-detail-right"]}>
        <p className={styles["price-info"]}>Price: From RM {product.price}</p>
        <label htmlFor="ticket-type">Ticket Type:</label>
        <select id="ticket-type">
          {product.ticketTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        <label htmlFor="booking-date">Booking Date:</label>
        <input type="date" id="booking-date" />
        <button className={styles["book-now-button"]}>Book Now</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;

