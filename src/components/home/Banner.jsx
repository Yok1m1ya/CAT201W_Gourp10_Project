import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./Banner.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // 在此添加搜索功能逻辑
    if (searchQuery.trim()) {
        navigate(`/browse?search=${encodeURIComponent(searchQuery)}`); // 跳转到 Browse 页面并附加查询参数
      }
  };

  const Arrow = ({ onClick, direction }) => (
    <div
      className={`${styles.arrow} ${direction === "left" ? styles.left : styles.right}`}
      onClick={onClick}
    >
      {direction === "left" ? "<" : ">"}
    </div>
  );

  Arrow.propTypes = {
    onClick: PropTypes.func.isRequired,
    direction: PropTypes.oneOf(["left", "right"]).isRequired,
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
  };

  return (
    <div className={styles['banner-container']}>
      {/* 搜索条 */}
      <div className={styles['search-bar-container']}>
        <form className={styles['search-bar']} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search destinations or activities"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {/* 轮播图 */}
      <div className={styles['slider-container']}>
        <Slider {...settings}>
          <div>
            <img
              src="/public/Luo_images/banners/Banner01.png"
              alt="Banner 1"
              className={styles['banner-image']}
            />
          </div>
          <div>
            <img
              src="/public/Luo_images/banners/Banner02.png"
              alt="Banner 2"
              className={styles['banner-image']}
            />
          </div>
          <div>
            <img
              src="/public/Luo_images/banners/Banner03.png"
              alt="Banner 3"
              className={styles['banner-image']}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;

