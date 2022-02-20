import React from 'react';

import ProductCard from '../product-card';

import { RELATED_PRODUCTS } from '../../constants/product';

import swipePrev from '../../images/product/swipe-prev.svg';
import swipeNext from '../../images/product/swipe-next.svg';

import styles from './related-products.module.scss';

const RelatedProducts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>RELATED PRODUCTS</span>
          <div className={styles.slider}>
            <button type='button'>
              <img src={swipePrev} alt='Switch left' />
            </button>
            <button type='button'>
              <img src={swipeNext} alt='Switch right' />
            </button>
          </div>
        </div>
        <div className={styles.products}>
          {RELATED_PRODUCTS.map((card) => (
            <ProductCard key={card.id} card={card} productType={card.category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
