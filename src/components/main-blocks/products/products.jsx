import React from 'react';

import ProductCards from '../../product-cards';

import { PRODUCT_FILTERS } from '../../../constants/main-blocks';

import styles from './products.module.scss';

const Products = ({ title, typeOfProducts }) => {
  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <div className={styles.productFilters}>
            {PRODUCT_FILTERS.map(({ id, name }) => (
              <button key={id} type='button' className={styles.productFilter}>
                {name}
              </button>
            ))}
          </div>
        </div>
        <ProductCards typeOfProducts={typeOfProducts} />
        <button type='button' className={styles.expandProducts}>
          SEE ALL
        </button>
      </div>
    </div>
  );
};

export default Products;
