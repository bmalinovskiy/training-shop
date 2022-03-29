import React, { useMemo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter, resetFilters } from '../../store/state/filter/actions';

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
    { name: 'colorFilters', title: 'COLOR', items: { list: colorList, filters: colorFilters } },
    { name: 'sizeFilters', title: 'SIZE', items: { list: sizeList, filters: sizeFilters } },
    { name: 'brandFilters', title: 'BRAND', items: { list: brandList, filters: brandFilters } },
    { name: 'priceFilters', title: 'PRICE', items: { list: priceList, filters: priceFilters } },
  ];

  const handleChangeFilter = useCallback(
    (filterName, value) => {
      dispatch(changeFilter({ filterName, value }));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch, productType]);

  return (
    <>
      <div className={styles.filterList} data-test-id={`filters-${productType}`}>
        {filterList.map(({ name, title, items: { list } }) => (
          <div className={styles.item} key={name}>
            <span className={styles.title}>{title}</span>
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
          {filterList.map(({ title, items: { filters } }) => (
            <React.Fragment key={title}>
              {filters.map((item) => (
                <span key={item} className={styles.item}>
                  {title.toLowerCase()}: {item}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default Filter;
