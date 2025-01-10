import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>WeTravel</div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="/">Home</a></li>
          <li><a href="/browse">Browse</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
