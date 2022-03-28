import React from 'react';
import { Link } from 'react-router-dom';

import ReactStars from 'react-rating-stars-component';

import styles from './product-card.module.scss';

const ProductCard = ({ card: { id, name, price, images, rating, discount }, productType }) => {
  const isPriceInteger = Number.isInteger(price) ? `$ ${price}.00` : `$ ${price.toFixed(2)}`;

  return (
    <Link to={`/${productType}/${id}`} className={styles.container} data-test-id={`clothes-card-${productType}`}>
      <div className={styles.cardImage}>
        <img src={`https://training.cleverland.by/shop${images[0]?.url}`} alt='Product' />
      </div>
      {discount && <span className={styles.discount}>{discount}</span>}
      <span className={styles.name}>{name}</span>
      <div className={styles.description}>
        <div>
          <span className={styles.price}>
            {discount
              ? `$ ${(price - (price / 100) * parseInt(discount.match(/\d+/), 10)).toFixed(2)}`
              : isPriceInteger}
          </span>
          {discount && (
            <span className={styles.regularPrice}>
              {Number.isInteger(price) ? `$ ${price}.00` : `$ ${price.toFixed(2)}`}
            </span>
          )}
        </div>
        <ReactStars count={5} value={rating} size={14} color='#e7e7e7' activeColor='#f0cd85' edit={false} />
      </div>
    </Link>
  );
};

export default ProductCard;
