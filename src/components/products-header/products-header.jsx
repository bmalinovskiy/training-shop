import React from 'react';

import { Link } from 'react-router-dom';

import ROUTES from '../../constants/routes';

import shareIcon from '../../images/products/share.svg';

import styles from './products-header.module.scss';

const ProductsHeader = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.topLine}>
          <div className={styles.navigation}>
            <Link to={ROUTES.root} className={styles.homeLink}>
              Home
            </Link>
            <span className={styles.pointer}>&#9658;</span>
            <Link to={`/${title.toLowerCase()}`} className={styles.productTypeLink}>
              {`${title.charAt(0).toUpperCase()}${title.slice(1).toLowerCase()}`}
            </Link>
          </div>
          <button type='button' className={styles.share}>
            <img className={styles.icon} src={shareIcon} alt='Share' />
            <span className={styles.text}>Share</span>
          </button>
        </div>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
};

export default ProductsHeader;
