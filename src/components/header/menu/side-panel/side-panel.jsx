import React from 'react';

import Search from '../../../../images/header/search.svg';
import Globe from '../../../../images/header/globe.svg';
import User from '../../../../images/header/user.svg';
import ShoppingBag from '../../../../images/header/shopping-bag.svg';

import styles from './side-panel.module.scss';

const SidePanel = () => {
  return (
    <div className={styles.sidePanel}>
      <button type='button'>
        <img src={Search} alt='SearchIcon' />
      </button>
      <button type='button'>
        <img src={Globe} alt='GlobeIcon' />
      </button>
      <button type='button'>
        <img src={User} alt='UserIcon' />
      </button>
      <button type='button' className={styles.shoppingBag}>
        <img src={ShoppingBag} alt='ShoppingBagIcon' />
        <span className={styles.products}>2</span>
      </button>
    </div>
  );
};

export default SidePanel;
