import React, { useMemo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeColorFilter,
  changeSizeFilter,
  changeBrandFilter,
  changePriceFilter,
  resetFilters,
} from '../../store/state/filter/actions';

import { filterSelector, productsSelector } from '../../selectors';

import styles from './filter.module.scss';

const Filter = ({ productType }) => {
  const dispatch = useDispatch();
  const { colorFilters, sizeFilters, brandFilters, priceFilters, itemsFound } = useSelector(filterSelector);
  const { products } = useSelector(productsSelector);

  const colorList = useMemo(
    () => [...new Set(products[productType].map(({ images }) => images.map(({ color }) => color)).flat())],
    [productType, products]
  );
  const sizeList = useMemo(
    () => [...new Set(products[productType].map((card) => card.sizes).flat())],
    [productType, products]
  );
  const brandList = useMemo(
    () => [...new Set(products[productType].map(({ brand }) => brand))],
    [productType, products]
  );
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

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <>
      <div className={styles.filterList} data-test-id={`filters-${productType}`}>
        <div className={styles.item}>
          <span className={styles.title}>COLOR</span>
          <div className={styles.list} data-test-id='filters-color'>
            {colorList.map((color) => (
              <div key={color}>
                <input type='checkbox' value={color} onChange={handleChange} data-test-id={`filter-color-${color}`} />
                <label htmlFor={color}>{color}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>SIZE</span>
          <div className={styles.list} data-test-id='filters-size'>
            {sizeList.map((size) => (
              <div key={size}>
                <input type='checkbox' value={size} onChange={handleChange} data-test-id={`filter-size-${size}`} />
                <label htmlFor={size}>{size}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>BRAND</span>
          <div className={styles.list} data-test-id='filters-brand'>
            {brandList.map((brand) => (
              <div key={brand}>
                <input type='checkbox' value={brand} onChange={handleChange} data-test-id={`filter-brand-${brand}`} />
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>PRICE</span>
          <div className={styles.list}>
            {priceList.map((price) => (
              <div key={price}>
                <input type='checkbox' value={price} onChange={handleChange} />
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
            {colorFilters.map((color) => (
              <span key={color} className={styles.item}>{`Color: ${color}`}</span>
            ))}
          </span>
          <span>
            {sizeFilters.map((size) => (
              <span key={size} className={styles.item}>{`Size: ${size}`}</span>
            ))}
          </span>
          <span>
            {brandFilters.map((brand) => (
              <span key={brand} className={styles.item}>{`Brand: ${brand}`}</span>
            ))}
          </span>
          <span>
            {priceFilters.map((price) => (
              <span key={price} className={styles.item}>{`Price: ${price}`}</span>
            ))}
          </span>
        </div>
      )}
    </>
  );
};

export default Filter;
