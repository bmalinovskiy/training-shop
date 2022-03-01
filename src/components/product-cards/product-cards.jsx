import React from 'react';

import { PRODUCTS } from '../../constants/products';

import ProductCard from '../product-card';

import styles from './product-cards.module.scss';

const ProductCards = ({ productType, particular }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {PRODUCTS[productType]
          .filter(({ particulars }) => (particular ? particulars[particular] : particulars))
          .map((card) => (
            <ProductCard key={card.id} card={card} productType={productType} />
          ))}
      </div>
    </div>
  );
};

export default ProductCards;
