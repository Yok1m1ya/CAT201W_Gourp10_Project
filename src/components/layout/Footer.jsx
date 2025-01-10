import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2025 WeTravel. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className={styles.link}>Privacy Policy</a> | 
          <a href="/terms" className={styles.link}> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
