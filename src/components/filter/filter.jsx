import React from 'react';

import { PRODUCTS } from '../../constants/products';

import styles from './filter.module.scss';

const Filter = ({ productType }) => {
  const colorList = new Set(PRODUCTS[productType].map(({ images }) => images.map(({ color }) => color)).flat());
  const sizeList = new Set(PRODUCTS[productType].map(({ sizes }) => sizes).flat());
  const brandList = new Set(PRODUCTS[productType].map(({ brand }) => brand));
  const priceList = ['$500+', '$200-500', '$100-200', '$50-100', '$0-50'];

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <span className={styles.title}>COLOR</span>
        <div className={styles.list}>
          {[...colorList].map((color) => (
            <div key={color}>
              <input key={color} type='checkbox' name={color} />
              <label htmlFor={color}>{color}</label>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.item}>
        <span className={styles.title}>SIZE</span>
        <div className={styles.list}>
          {[...sizeList].map((size) => (
            <div key={size}>
              <input key={size} type='checkbox' name={size} />
              <label htmlFor={size}>{size}</label>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.item}>
        <span className={styles.title}>BRAND</span>
        <div className={styles.list}>
          {[...brandList].map((brand) => (
            <div key={brand} className={styles.values}>
              <input key={brand} type='checkbox' name={brand} />
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.item}>
        <span className={styles.title}>PRICE</span>
        <div className={styles.list}>
          {priceList.map((price) => (
            <div key={price} className={styles.values}>
              <input key={price} type='checkbox' name={price} />
              <label htmlFor={price}>{price}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
