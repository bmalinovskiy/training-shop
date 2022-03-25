import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Rating from '../rating';

import { productsSelector } from '../../selectors';
import { setCurrentProduct } from '../../store/state/products/actions';

import styles from './product-card.module.scss';

const ProductCard = ({ card: { id, name, price, images, rating, discount }, productType }) => {
  const dispatch = useDispatch();

  const { products } = useSelector(productsSelector);
  const currentProduct = products[productType].find(({ id: productId }) => productId === id);

  const isPriceInteger = Number.isInteger(price) ? `$ ${price}.00` : `$ ${price.toFixed(2)}`;

  const handleSetProduct = () => {
    dispatch(setCurrentProduct({ currentProduct }));
  };

  return (
    <Link
      to={`/${productType}/${id}`}
      onClick={handleSetProduct}
      className={styles.container}
      data-test-id={`clothes-card-${productType}`}
    >
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
        <Rating rating={rating} />
      </div>
    </Link>
  );
};

export default ProductCard;
