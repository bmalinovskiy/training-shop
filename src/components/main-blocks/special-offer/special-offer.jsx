import React from 'react';

import womanImage from '../../../images/main-blocks/special-offer/woman.svg';
import manImage from '../../../images/main-blocks/special-offer/man.svg';

import styles from './special-offer.module.scss';

const SpecialOffer = () => {
  return (
    <div className={styles.specialOffer}>
      <div className={styles.container}>
        <img src={womanImage} alt='Woman' className={styles.womanImage} />
        <div className={styles.subscribe}>
          <span className={styles.specialOfferTitle}>SPECIAL OFFER</span>
          <span className={styles.subscribeTitle}>
            SUBSCRIBE <br /> AND <span className={styles.highlighted}>GET 10% OFF</span>
          </span>
          <input placeholder='Enter your email' />
          <button type='button'>SUBSCRIBE</button>
        </div>
        <img src={manImage} alt='Man' className={styles.manImage} />
      </div>
    </div>
  );
};

export default SpecialOffer;
