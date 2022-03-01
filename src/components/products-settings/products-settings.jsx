import React from 'react';

import Filter from '../filter';

import filterIcon from '../../images/products/filter.svg';
import viewListIcon from '../../images/products/view-list.svg';
import viewGridIcon from '../../images/products/view-grid.svg';

import styles from './products-settings.module.scss';

const ProductsSettings = ({ productType }) => {
  return (
    <>
      <div className={styles.container}>
        <button type='button' className={styles.filter}>
          <img src={filterIcon} alt='Filter' className={styles.icon} />
          <span className={styles.text}>FILTER</span>
        </button>
        <div className={styles.viewType}>
          <button type='button' className={styles.list}>
            <img src={viewListIcon} alt='View list' />
          </button>
          <button type='button' className={styles.grid}>
            <img src={viewGridIcon} alt='View grid' />
          </button>
        </div>
      </div>
      <Filter productType={productType} />
    </>
  );
};

export default ProductsSettings;
