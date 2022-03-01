import React from 'react';

import { Link } from 'react-router-dom';

import Rating from '../rating';

import ROUTES from '../../constants/routes';

import shareIcon from '../../images/products/share.svg';

import styles from './product-header.module.scss';

const ProductHeader = ({ product: { id, name, category, rating, reviews } }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.topLine}>
          <div className={styles.navigation}>
            <Link to={ROUTES.root} className={styles.homeLink}>
              Home
            </Link>
            <span className={styles.pointer}>&#9658;</span>
            <Link to={`/${category}`} className={styles.productTypeLink}>
              {`${category.charAt(0).toUpperCase()}${category.slice(1)}`}
            </Link>
            <span className={[styles.pointer, styles.active].join(' ')}>&#9658;</span>
            <Link to={`/${category}/${id}`} className={styles.productLink}>
              {name}
            </Link>
          </div>
          <button type='button' className={styles.share}>
            <img className={styles.icon} src={shareIcon} alt='Share' />
            <span className={styles.text}>Share</span>
          </button>
        </div>
        <span className={styles.title}>{name}</span>
        <div className={styles.bottomLine}>
          <div className={styles.rating}>
            <Rating rating={rating} className={styles.stars} />
            <span className={styles.text}>{`${reviews.length} Reviews`}</span>
          </div>
          <div className={styles.article}>
            <span className={styles.name}>
              SKU: <span className={styles.value}>777</span>
            </span>
            <span className={styles.name}>
              Availability: <span className={styles.value}>In Stock</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
