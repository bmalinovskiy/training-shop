import React from 'react';

import { PAYMENT_FAQ, PAYMENT_SYSTEMS } from '../../../constants/product';

import heartIcon from '../../../images/product/heart.svg';
import scaleIcon from '../../../images/product/scale.svg';

import styles from './payment-info.module.scss';

const PaymentInfo = ({ price }) => {
  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.actions}>
        <span className={styles.price}>{`$ ${price}`}</span>
        <button type='button' className={styles.addProduct}>
          ADD TO CARD
        </button>
        <img src={heartIcon} alt='Favourite' className={styles.favouriteIcon} />
        <img src={scaleIcon} alt='Scale' className={styles.scaleIcon} />
      </div>
      <hr />
      <div className={styles.faq}>
        {PAYMENT_FAQ.map(({ id, name, text, imgPath }) => (
          <button type='button' key={id} className={styles.item}>
            <img src={imgPath} alt={name} />
            <span className={styles.text}>{text}</span>
          </button>
        ))}
      </div>
      <div className={styles.safeCheckout}>
        <span className={styles.text}>GUARANTEED SAFE CHECKOUT</span>
        <hr />
      </div>
      <div className={styles.paymentSystems}>
        {PAYMENT_SYSTEMS.map(({ id, name, imgPath }) => (
          <img key={id} src={imgPath} alt={name} />
        ))}
      </div>
    </div>
  );
};

export default PaymentInfo;
