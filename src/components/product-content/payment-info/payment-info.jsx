import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { PAYMENT_FAQ, PAYMENT_SYSTEMS } from '../../../constants/product';

import heartIcon from '../../../images/product/heart.svg';
import scaleIcon from '../../../images/product/scale.svg';

import { shoppingCartSelector } from '../../../selectors';

import { addItemToCart, removeItemFromCart } from '../../../store/state/shopping-cart/actions';

import styles from './payment-info.module.scss';

const PaymentInfo = ({ price, name, color, size, imgUrl }) => {
  const dispatch = useDispatch();

  const { items } = useSelector(shoppingCartSelector);

  const isItemInCart = items.filter((item) => item.color === color && item.size === size).length;

  const handleItemAction = () => {
    if (isItemInCart) {
      dispatch(removeItemFromCart(items.find((item) => item.color === color && item.size === size).id));
    } else
      dispatch(
        addItemToCart({
          id: uuidv4(),
          name,
          quantity: 1,
          price,
          color,
          size,
          imgUrl,
        })
      );
  };

  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.actions}>
        <span className={styles.price}>{`$ ${price}`}</span>
        <button type='button' className={styles.addProduct} onClick={handleItemAction}>
          {isItemInCart ? 'REMOVE FROM CARD' : 'ADD TO CARD'}
        </button>
        <img src={heartIcon} alt='Favourite' className={styles.favouriteIcon} />
        <img src={scaleIcon} alt='Scale' className={styles.scaleIcon} />
      </div>
      <hr />
      <div className={styles.faq}>
        {PAYMENT_FAQ.map(({ id: itemId, name: itemName, text, imgPath }) => (
          <button type='button' key={itemId} className={styles.item}>
            <img src={imgPath} alt={itemName} />
            <span className={styles.text}>{text}</span>
          </button>
        ))}
      </div>
      <div className={styles.safeCheckout}>
        <span className={styles.text}>GUARANTEED SAFE CHECKOUT</span>
        <hr />
      </div>
      <div className={styles.paymentSystems}>
        {PAYMENT_SYSTEMS.map(({ id: itemId, name: itemName, imgPath }) => (
          <img key={itemId} src={imgPath} alt={itemName} />
        ))}
      </div>
    </div>
  );
};

export default PaymentInfo;
