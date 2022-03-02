import React from 'react';
import { useSelector } from 'react-redux';

import ProductCard from '../product-card';

import { PRODUCTS } from '../../constants/products';

import { filterSelector } from '../../selectors';

import styles from './product-cards.module.scss';

const ProductCards = ({ productType, particular }) => {
  const { sizes, brands } = useSelector(filterSelector);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {PRODUCTS[productType]
          .filter(({ particulars }) => (particular ? particulars[particular] : particulars))
          .filter((card) =>
            sizes.length > 0 ? sizes.filter((size) => card.sizes.includes(size)).length === sizes.length : card
          )
          .filter((card) => (brands.length > 0 ? brands.includes(card.brand) : card))
          .map((card) => (
            <ProductCard key={card.id} card={card} productType={productType} />
          ))}
      </div>
    </div>
  );
};

export default ProductCards;
