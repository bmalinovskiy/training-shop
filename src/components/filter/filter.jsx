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

  const filterList = [
    { name: 'color', items: { list: colorList, filters: colorFilters } },
    { name: 'size', items: { list: sizeList, filters: sizeFilters } },
    { name: 'brand', items: { list: brandList, filters: brandFilters } },
    { name: 'price', items: { list: priceList, filters: priceFilters } },
  ];

  const handleChangeFilter = useCallback(
    (name, value) => {
      switch (name) {
        case 'color':
          dispatch(changeColorFilter({ value }));
          break;
        case 'size':
          dispatch(changeSizeFilter({ value }));
          break;
        case 'brand':
          dispatch(changeBrandFilter({ value }));
          break;
        case 'price':
          dispatch(changePriceFilter({ value }));
          break;
        default:
          break;
      }
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <>
      <div className={styles.filterList} data-test-id={`filters-${productType}`}>
        {filterList.map(({ name, items: { list } }) => (
          <div className={styles.item} key={name}>
            <span className={styles.title}>{name.toUpperCase()}</span>
            <div className={styles.list}>
              {list.map((item) => (
                <div key={item}>
                  <input
                    type='checkbox'
                    value={item}
                    onChange={({ target: { value } }) => handleChangeFilter(name, value)}
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {itemsFound !== null && (
        <div className={styles.itemsFoundList}>
          <span className={styles.title}>{itemsFound} items found</span>
          {filterList.map(({ name, items: { filters } }) => (
            <span key={name}>
              {filters.map((item) => (
                <span key={item} className={styles.item}>
                  {name}: {item}
                </span>
              ))}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default Filter;
