import React from 'react';

import { Link } from 'react-router-dom';

import styles from './banners.module.scss';

const Banners = () => {
  return (
    <div className={styles.banners}>
      <div className={styles.slider}>
        <div className={styles.sliderBanner}>
          <span className={styles.bannerLabel}>BANNER</span>
          <span className={styles.sliderTitle}>YOUR TITLE TEXT</span>
        </div>
      </div>
      <div className={styles.womenBanner}>
        <Link to='/women'>
          <span className={styles.bannerTitle}>WOMEN</span>
        </Link>
      </div>
      <div className={styles.menBanner}>
        <Link to='/men'>
          <span className={styles.bannerTitle}>MEN</span>
        </Link>
      </div>
      <div className={styles.accessoriesBanner}>
        <Link to='/accessories'>
          <span className={styles.bannerTitle}>ACCESSORIES</span>
        </Link>
      </div>
    </div>
  );
};

export default Banners;
