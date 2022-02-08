import React from 'react';

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
        <span className={styles.bannerTitle}>WOMEN</span>
      </div>
      <div className={styles.menBanner}>
        <span className={styles.bannerTitle}>MEN</span>
      </div>
      <div className={styles.accessoriesBanner}>
        <span className={styles.bannerTitle}>ACCESSORIES</span>
      </div>
    </div>
  );
};

export default Banners;
