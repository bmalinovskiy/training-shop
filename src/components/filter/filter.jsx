import React, { useMemo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PRODUCTS } from '../../constants/products';

import {
  changeColorFilter,
  changeSizeFilter,
  changeBrandFilter,
  changePriceFilter,
  resetFilters,
} from '../../store/state/filter/actions';

import { filterSelector } from '../../selectors';

import styles from './filter.module.scss';

const Filter = ({ productType }) => {
  const dispatch = useDispatch();
  const { colors, sizes, brands, prices, itemsFound } = useSelector(filterSelector);

  const colorList = useMemo(
    () => [...new Set(PRODUCTS[productType].map(({ images }) => images.map(({ color }) => color)).flat())],
    [productType]
  );
  const sizeList = useMemo(() => [...new Set(PRODUCTS[productType].map((card) => card.sizes).flat())], [productType]);
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
    <>
      <div className={styles.filterList}>
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
      {itemsFound !== null && (
        <div className={styles.appliedFilters}>
          <span className={styles.itemsFound}>{`${itemsFound} items found`}</span>
          <span>
            {colors.map((color) => (
              <span key={color} className={styles.item}>{`Color: ${color}`}</span>
            ))}
          </span>
          <span>
            {sizes.map((size) => (
              <span key={size} className={styles.item}>{`Size: ${size}`}</span>
            ))}
          </span>
          <span>
            {brands.map((brand) => (
              <span key={brand} className={styles.item}>{`Brand: ${brand}`}</span>
            ))}
          </span>
          <span>
            {prices.map((price) => (
              <span key={price} className={styles.item}>{`Price: ${price}`}</span>
            ))}
          </span>
        </div>
      )}
    </>
  );
};

export default Filter;
