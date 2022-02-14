import React from 'react';

import { Link } from 'react-router-dom';

import Rating from '../rating';

import styles from './product-card.module.scss';

const ProductCard = ({ id, imgPath, name, title, price, rating, discount }) => {
  return (
    <Link to={id}>
      <div className={styles.productCard}>
        <img src={imgPath} alt={name} />
        <span className={discount ? styles.discount : styles.undiscounted}>{`-${discount}%`}</span>
        <span className={styles.title}>{title}</span>
        <div className={styles.description}>
          <div>
            <span className={styles.price}>
              {discount ? `$ ${price - (price / 100) * discount}.00` : `$ ${price}.00`}
            </span>
            <span className={discount ? styles.undiscountedPrice : styles.undiscounted}>{`$ ${price}.00`}</span>
          </div>
          <Rating rating={rating} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
