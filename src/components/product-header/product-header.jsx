import React from 'react';

import { Link } from 'react-router-dom';

import Rating from '../rating';

import ROUTES from '../../constants/routes';

import shareIcon from '../../images/products/share.svg';

import styles from './product-header.module.scss';

const ProductHeader = ({ title, productType, productId, rating, sku, availability }) => {
  return (
    <div className={styles.productHeader}>
      <div className={styles.container}>
        <div className={styles.topLine}>
          <div className={styles.navigation}>
            <Link to={ROUTES.root} className={styles.homeLink}>
              Home
            </Link>
            <span className={styles.pointer}>&#9658;</span>
            <Link to={`/${productType}`} className={styles.productTypeLink}>
              {`${productType.charAt(0).toUpperCase()}${productType.slice(1)}`}
            </Link>
            <span className={[styles.pointer, styles.active].join(' ')}>&#9658;</span>
            <Link to={`/${productType}/${productId}`} className={styles.productLink}>
              {title}
            </Link>
          </div>
          <button type='button' className={styles.shareButton}>
            <img className={styles.shareIcon} src={shareIcon} alt='Share' />
            <span className={styles.shareText}>Share</span>
          </button>
        </div>
        <span className={styles.title}>{title}</span>
        <div className={styles.bottomLine}>
          <div className={styles.rating}>
            <Rating rating={rating} className={styles.ratingStars} />
            <span className={styles.ratingText}>2 Reviews</span>
          </div>
          <div className={styles.productArticle}>
            <span className={styles.name}>
              SKU: <span className={styles.value}>{sku}</span>
            </span>
            <span className={styles.name}>
              Availability: <span className={styles.value}>{availability}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
