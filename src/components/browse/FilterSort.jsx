import React from "react";
import styles from "./FilterSort.module.css";

const FilterSort = ({
  currentCategory,
  currentRegion,
  onFilterChange,
  onRegionChange,
  onSortChange,
}) => {

  return (
    <div className={styles['filter-sort']}>
      {/* 分类筛选 */}
      <select value={currentCategory} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="zoo">Zoo & Aquarium</option>
        <option value="theme-park">Theme Park</option>
        <option value="museum">Museum & Historical Site</option>
      </select>

      {/* 地区筛选 */}
      <select value={currentRegion} onChange={(e) => onRegionChange(e.target.value)}>
        <option value="all">All Regions</option>
        <option value="KL">Kuala Lumpur</option>
        <option value="SG">Singapore</option>
        <option value="SH">Shanghai</option>
        <option value="TOKYO">Tokyo</option>
      </select>

      {/* 排序 */}
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="default">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Rating</option>
      </select>
    </div>
  );
};

export default FilterSort;

