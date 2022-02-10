import React from 'react';

import ProductCard from '../product-card';

import styles from './product-cards.module.scss';

const ProductCards = ({ typeOfProducts }) => {
  return (
    <div className={styles.productCards}>
      {typeOfProducts.map(({ id, name, title, price, rating, imgPath }) => (
        <ProductCard key={id} name={name} title={title} price={price} rating={rating} imgPath={imgPath} />
      ))}
    </div>
  );
};

export default ProductCards;
