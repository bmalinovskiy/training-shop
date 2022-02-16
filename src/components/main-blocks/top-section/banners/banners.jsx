import React from 'react';

import { Link } from 'react-router-dom';

import switchLeft from '../../../../images/product/switch-left.svg';
import switchRight from '../../../../images/product/switch-right.svg';

import styles from './banners.module.scss';

const Banners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <button type='button' className={styles.switcher}>
          <img src={switchLeft} alt='Switch left' />
        </button>
        <div className={styles.label}>
          <span className={styles.title}>BANNER</span>
          <span className={styles.text}>YOUR TITLE TEXT</span>
        </div>
        <button type='button' className={styles.switcher}>
          <img src={switchRight} alt='Switch right' />
        </button>
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
