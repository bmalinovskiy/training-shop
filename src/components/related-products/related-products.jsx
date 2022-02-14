import React from 'react';

import ProductCard from '../product-card';

import { RELATED_PRODUCTS } from '../../constants/product';

import switchLeftIcon from '../../images/product/switch-left.svg';
import switchRightIcon from '../../images/product/switch-right.svg';

import styles from './related-products.module.scss';

const RelatedProducts = () => {
  return (
    <div className={styles.relatedProducts}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>RELATED PRODUCTS</span>
          <div className={styles.slider}>
            <button type='button' className={styles.sliderButton}>
              <img src={switchLeftIcon} alt='Switch left' />
            </button>
            <button type='button' className={styles.sliderButton}>
              <img src={switchRightIcon} alt='Switch right' />
            </button>
          </div>
        </div>
        <div className={styles.products}>
          {RELATED_PRODUCTS.map(({ id, name, title, price, discount, rating, imgPath }) => (
            <ProductCard
              key={id}
              id={id}
              name={name}
              title={title}
              price={price}
              discount={discount}
              rating={rating}
              imgPath={imgPath}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
