import React, { useState } from 'react';

import ProductCards from '../../product-cards';

import { PARTICULARS } from '../../../constants/main-blocks';

import styles from './products.module.scss';

const Products = ({ title, productType }) => {
  const [particular, setParticular] = useState(PARTICULARS[0].name);

  return (
    <div className={styles.wrapper} data-test-id={`clothes-${productType}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <div className={styles.filters}>
            {PARTICULARS.map(({ id, name, text }) => (
              <button
                key={id}
                type='button'
                className={[styles.filter, name === particular ? styles.active : null].join(' ')}
                onClick={() => setParticular(name)}
                data-test-id={`clothes-${productType}-${name}`}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
        <ProductCards productType={productType} particular={particular} />
        <button type='button' className={styles.expandProducts}>
          SEE ALL
        </button>
      </div>
    </div>
  );
};

export default Products;
