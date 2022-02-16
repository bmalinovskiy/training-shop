import React from 'react';

import SocialNetworks from '../social-networks';

import styles from './footer-top-bar.module.scss';

const FooterTopBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.title}>BE IN TOUCH WITH US:</span>
        <div className={styles.form}>
          <input type='text' placeholder='Enter your email' />
          <button type='button'>JOIN US</button>
        </div>
        <SocialNetworks />
      </div>
    </div>
  );
};

export default FooterTopBar;
