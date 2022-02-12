import React from 'react';

import filterIcon from '../../images/products/filter.svg';
import viewListIcon from '../../images/products/view-list.svg';
import viewGridIcon from '../../images/products/view-grid.svg';
import arrowIcon from '../../images/products/arrow.svg';

import styles from './products-settings.module.scss';

const ProductsSettings = () => {
  return (
    <div className={styles.productsSettings}>
      <div className={styles.container}>
        <button type='button' className={styles.filter}>
          <img src={filterIcon} alt='Filter' className={styles.filterIcon} />
          <span className={styles.filterText}>FILTER</span>
        </button>
        <div className={styles.viewType}>
          <button type='button' className={styles.viewList}>
            <img src={viewListIcon} alt='View list' />
          </button>
          <button type='button' className={styles.viewGrid}>
            <img src={viewGridIcon} alt='View grid' />
          </button>
        </div>
        <button type='button' className={styles.categories}>
          <span className={styles.categoriesText}>BESTSELLERS</span>
          <img src={arrowIcon} alt='Arrow' className={styles.categoriesIcon} />
        </button>
      </div>
    </div>
  );
};

export default ProductsSettings;
