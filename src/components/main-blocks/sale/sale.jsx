import React from 'react';

import styles from './sale.module.scss';

const Sale = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.newSeasonBanner}>
          <div className={styles.label}>
            <span className={styles.title}>NEW SEASON</span>
            <span className={styles.text}>LOOKBOOK COLLECTION</span>
          </div>
        </div>
        <div className={styles.saleBanner}>
          <div className={styles.label}>
            <span className={styles.title}>SALE</span>
            <span className={styles.text}>
              GET UP TO <span className={styles.highlighted}>50% OFF</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
