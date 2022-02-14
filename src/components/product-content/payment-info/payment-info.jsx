import React from 'react';

import { PAYMENT_FAQ, PAYMENT_SYSTEMS } from '../../../constants/product';

import heartIcon from '../../../images/product/heart.svg';
import scaleIcon from '../../../images/product/scale.svg';

import styles from './payment-info.module.scss';

const PaymentInfo = () => {
  return (
    <div className={styles.paymentInfo}>
      <hr />
      <div className={styles.paymentActions}>
        <span className={styles.productPrice}>$ 379.99</span>
        <button type='button' className={styles.productAdd}>
          ADD TO CARD
        </button>
        <img src={heartIcon} alt='Favourite' className={styles.favouriteIcon} />
        <img src={scaleIcon} alt='Scale' className={styles.scaleIcon} />
      </div>
      <hr />
      <div className={styles.paymentFAQ}>
        {PAYMENT_FAQ.map(({ id, name, text, imgPath }) => (
          <button type='button' key={id} className={styles.faqItem}>
            <img src={imgPath} alt={name} />
            <span className={styles.itemText}>{text}</span>
          </button>
        ))}
      </div>
      <div className={styles.safeCheckout}>
        <span className={styles.safeCheckoutText}>GUARANTEED SAFE CHECKOUT</span>
        <hr className={styles.safeCheckoutHr} />
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
