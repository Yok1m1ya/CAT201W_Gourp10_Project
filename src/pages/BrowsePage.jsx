import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import FilterSort from "../components/browse/FilterSort";
import productsData from "../data/products.json";
import RegionCard from "../components/browse/RegionCard";
import styles from "./BrowsePage.module.css";
import ProductCard from "../components/common/ProductCard"

const BrowsePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // 直接从 URL 获取当前参数
  const params = queryString.parse(location.search);
  
  // 使用 URL 参数作为状态的初始值
  const [currentCategory, setCurrentCategory] = useState(params.category || "all");
  const [currentRegion, setCurrentRegion] = useState(params.region || "all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  // 同步 URL 和状态
  useEffect(() => {
    const params = queryString.parse(location.search);
    setCurrentCategory(params.category || "all");
    setCurrentRegion(params.region || "all");
  }, [location.search]);

  // 产品筛选逻辑
  useEffect(() => {
    let filtered = [...productsData];
    
    if (currentCategory && currentCategory !== "all") {
      filtered = filtered.filter(product => product.category === currentCategory);
    }
    
    if (currentRegion && currentRegion !== "all") {
      filtered = filtered.filter(product => product.region === currentRegion);
    }
    
    setFilteredProducts(filtered);
    setSortedProducts(filtered);
  }, [currentCategory, currentRegion]);

  // 更新 URL 和状态的通用函数
  const updateParams = (newParams) => {
    const queryStr = queryString.stringify(newParams);
    navigate({
      pathname: location.pathname,
      search: queryStr ? `?${queryStr}` : ""
    });
  };

  const handleFilterChange = (newCategory) => {
    // 同时更新状态和 URL
    setCurrentCategory(newCategory);
    const newParams = { ...queryString.parse(location.search) };
    
    if (newCategory === "all") {
      delete newParams.category;
    } else {
      newParams.category = newCategory;
    }
    
    updateParams(newParams);
  };

  const handleRegionChange = (newRegion) => {
    // 同时更新状态和 URL
    setCurrentRegion(newRegion);
    const newParams = { ...queryString.parse(location.search) };
    
    if (newRegion === "all") {
      delete newParams.region;
    } else {
      newParams.region = newRegion;
    }
    
    updateParams(newParams);
  };

  const handleSortChange = (sort) => {
    const sorted = [...filteredProducts];
    if (sort === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sort === "rating-desc") {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    setSortedProducts(sorted);
  };

  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>Browse Products</h1>
      <RegionCard region={currentRegion} />
      <div className={styles["filterContainer"]}>
        <FilterSort
          currentCategory={currentCategory}
          currentRegion={currentRegion}
          onFilterChange={handleFilterChange}
          onRegionChange={handleRegionChange}
          onSortChange={handleSortChange}
        />
      </div>
      <div className={styles["productGridContainer"]}>
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrowsePage;