import React from 'react';

import ProductCards from '../../product-cards';

import { PRODUCT_FILTERS } from '../../../constants/main-blocks';

import styles from './products.module.scss';

const Products = ({ title, productType }) => {
  return (
    <div className={styles.wrapper} data-test-id={`clothes-${productType}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <div className={styles.filters}>
            {PRODUCT_FILTERS.map(({ id, name }) => (
              <button key={id} type='button' className={styles.filter}>
                {name}
              </button>
            ))}
          </div>
        </div>
        <ProductCards productType={productType} />
        <button type='button' className={styles.expandProducts}>
          SEE ALL
        </button>
      </div>
    </div>
  );
};

export default Products;
