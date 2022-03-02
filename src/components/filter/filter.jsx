import React, { useMemo, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { PRODUCTS } from '../../constants/products';

import {
  changeColorFilter,
  changeSizeFilter,
  changeBrandFilter,
  changePriceFilter,
  resetFilters,
} from '../../store/state/filter/actions';

import styles from './filter.module.scss';

const Filter = ({ productType }) => {
  const dispatch = useDispatch();

  const colorList = useMemo(
    () => [...new Set(PRODUCTS[productType].map(({ images }) => images.map(({ color }) => color)).flat())],
    [productType]
  );
  const sizeList = useMemo(() => [...new Set(PRODUCTS[productType].map(({ sizes }) => sizes).flat())], [productType]);
  const brandList = useMemo(() => [...new Set(PRODUCTS[productType].map(({ brand }) => brand))], [productType]);
  const priceList = useMemo(() => ['$500+', '$200-500', '$100-200', '$50-100', '$0-50'], []);

  const handleChange = useCallback(
    ({ target: { value } }) => {
      if (colorList.includes(value)) {
        dispatch(changeColorFilter({ value }));
      }
      if (sizeList.includes(value)) {
        dispatch(changeSizeFilter({ value }));
      }
      if (brandList.includes(value)) {
        dispatch(changeBrandFilter({ value }));
      }
      if (priceList.includes(value)) {
        dispatch(changePriceFilter({ value }));
      }
    },
    [dispatch, brandList, colorList, priceList, sizeList]
  );

  useEffect(() => dispatch(resetFilters()), [dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <span className={styles.title}>COLOR</span>
        <div className={styles.list}>
          {colorList.map((color) => (
            <div key={color}>
              <input key={color} type='checkbox' value={color} onChange={handleChange} />
              <label htmlFor={color}>{color}</label>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.item}>
        <span className={styles.title}>SIZE</span>
        <div className={styles.list}>
          {sizeList.map((size) => (
            <div key={size}>
              <input key={size} type='checkbox' value={size} onChange={handleChange} />
              <label htmlFor={size}>{size}</label>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.item}>
        <span className={styles.title}>BRAND</span>
        <div className={styles.list}>
          {brandList.map((brand) => (
            <div key={brand} className={styles.values}>
              <input key={brand} type='checkbox' value={brand} onChange={handleChange} />
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
              <input key={price} type='checkbox' value={price} onChange={handleChange} />
              <label htmlFor={price}>{price}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
