import React from 'react';

import { Link } from 'react-router-dom';

import Rating from '../rating';

import styles from './product-card.module.scss';

const ProductCard = ({ id, imgPath, name, title, price, rating }) => {
  return (
    <Link to={id}>
      <div className={styles.productCard}>
        <img src={imgPath} alt={name} />
        <span className={styles.title}>{title}</span>
        <div className={styles.description}>
          <span className={styles.price}>{`$ ${price}.00`}</span>
          <Rating rating={rating} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
