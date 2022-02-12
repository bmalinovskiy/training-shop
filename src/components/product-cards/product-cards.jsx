import React from 'react';

import ProductCard from '../product-card';

import styles from './product-cards.module.scss';

const ProductCards = ({ products, productType }) => {
  return (
    <div className={styles.productCards}>
      <div className={styles.container}>
        {products.map(({ id, name, title, price, rating, imgPath }) => (
          <ProductCard
            key={id}
            id={id}
            productType={productType}
            name={name}
            title={title}
            price={price}
            rating={rating}
            imgPath={imgPath}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
