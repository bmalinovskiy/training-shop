import React from 'react';

import Contacts from '../contacts';

import styles from './top-bar.module.scss';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <span className={styles.label}>BE IN TOUCH WITH US:</span>
        <div className={styles.form}>
          <input type='text' placeholder='Enter your email' />
          <button type='button'>JOIN US</button>
        </div>
        <Contacts />
      </div>
    </div>
  );
};

export default TopBar;
