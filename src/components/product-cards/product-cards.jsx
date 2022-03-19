import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductCard from '../product-card';

import { setItemsFound } from '../../store/state/filter/actions';
import { getProductsRequest } from '../../store/state/products/actions';

import { filterSelector, productsSelector } from '../../selectors';

import styles from './product-cards.module.scss';

const ProductCards = ({ productType, particular }) => {
  const dispatch = useDispatch();

  const { colorFilters, sizeFilters, brandFilters, priceFilters } = useSelector(filterSelector);
  const { products } = useSelector(productsSelector);

  const priceRanges = priceFilters.map((price) => price.replace(/[^0-9,-]/g, '').split('-'));
  const isAnyFilter = colorFilters.length || sizeFilters.length || brandFilters.length || priceFilters.length;

  useEffect(() => {
    if (!products[productType].length) {
      dispatch(getProductsRequest());
    }
  }, [dispatch, productType, products]);

  const productCards = products[productType]
    .filter(
      ({ particulars, images, sizes, brand, price, discount }) =>
        (particular ? particulars[particular] : particulars) &&
        (colorFilters.length
          ? colorFilters.filter((item) => images.some(({ color }) => color === item)).length
          : images) &&
        (sizeFilters.length ? sizeFilters.filter((size) => sizes.includes(size)).length : sizes) &&
        (brandFilters.length ? brandFilters.includes(brand) : brand) &&
        (priceFilters.length
          ? priceRanges.filter(([from, to]) =>
              discount
                ? price - (price / 100) * parseInt(discount.match(/\d+/), 10) > parseInt(from, 10) &&
                  price - (price / 100) * parseInt(discount.match(/\d+/), 10) < parseInt(to, 10)
                : price > parseInt(from, 10) && price < parseInt(to, 10)
            ).length
          : price)
    )
    .map((card) => <ProductCard key={card.id} card={card} productType={productType} />);

  useEffect(
    () => (isAnyFilter ? dispatch(setItemsFound(productCards.length)) : dispatch(setItemsFound(null))),
    [dispatch, isAnyFilter, productCards.length]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{productCards}</div>
    </div>
  );
};

export default ProductCards;
