import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductCard from '../product-card';

import { PRODUCTS } from '../../constants/products';

import { setItemsFound } from '../../store/state/filter/actions';

import { filterSelector } from '../../selectors';

import styles from './product-cards.module.scss';

const ProductCards = ({ productType, particular }) => {
  const dispatch = useDispatch();

  const { colors, sizes, brands, prices } = useSelector(filterSelector);
  const priceRanges = prices.map((price) => price.replace(/[^0-9,-]/g, '').split('-'));

  const productCards = PRODUCTS[productType]
    .filter(({ particulars }) => (particular ? particulars[particular] : particulars))
    .filter((card) =>
      colors.length > 0 ? colors.filter((item) => card.images.find(({ color }) => color === item)).length > 0 : card
    )
    .filter((card) =>
      sizes.length > 0 ? sizes.filter((size) => card.sizes.includes(size)).length === sizes.length : card
    )
    .filter((card) => (brands.length > 0 ? brands.includes(card.brand) : card))
    .filter((card) =>
      prices.length > 0
        ? priceRanges.filter(([from, to]) =>
            card.discount
              ? card.price - (card.price / 100) * parseInt(card.discount.match(/\d+/), 10) > parseInt(from, 10) &&
                card.price - (card.price / 100) * parseInt(card.discount.match(/\d+/), 10) < parseInt(to, 10)
              : card.price > parseInt(from, 10) && card.price < parseInt(to, 10)
          ).length > 0
        : card
    )
    .map((card) => <ProductCard key={card.id} card={card} productType={productType} />);

  useEffect(
    () =>
      colors.length || sizes.length || brands.length || prices.length
        ? dispatch(setItemsFound(productCards.length))
        : dispatch(setItemsFound(null)),
    [brands.length, colors.length, dispatch, prices.length, productCards.length, sizes.length]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{productCards}</div>
    </div>
  );
};

export default ProductCards;
