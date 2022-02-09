import React from 'react';

import styles from './sale.module.scss';

const Sale = () => {
  return (
    <div className={styles.sale}>
      <div className={styles.container}>
        <div className={styles.newSeasonBanner}>
          <div className={styles.bannerLabel}>
            <span className={styles.labelTitle}>NEW SEASON</span>
            <span className={styles.labelDescription}>LOOKBOOK COLLECTION</span>
          </div>
        </div>
        <div className={styles.saleBanner}>
          <div className={styles.bannerLabel}>
            <span className={styles.labelTitle}>SALE</span>
            <span className={styles.labelDescription}>
              GET UP TO <span className={styles.highlighted}>50% OFF</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
