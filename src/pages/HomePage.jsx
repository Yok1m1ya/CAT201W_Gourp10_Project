// src/pages/HomePage.jsx
import styles from './HomePage.module.css';
import Header from '../components/layout/Header';
import Banner from '../components/home/Banner';
import TravelersFavorite from '../components/home/TravelersFavorite';
import Footer from '../components/layout/Footer';
import WhereToGo from "../components/home/WhereToGo";
import regions from "../data/regions.json";
import products from "../data/products.json";
import categories from "../data/categories.json";
import CategorySelection from "../components/home/CategorySelection";
import TopSeller from "../components/home/TopSeller";



function HomePage() {
  return (
    <div className={styles.homePage}>
      <Header />
      <main className={styles.main}>
        <Banner />
        <TravelersFavorite />
        <CategorySelection categories={categories} />
        <WhereToGo regions={regions} />
        <TopSeller />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
