import React from 'react';

import Search from '../../../../images/main/search.png';
import Globe from '../../../../images/main/globe.png';
import User from '../../../../images/main/user.png';
import ShoppingBag from '../../../../images/main/shopping-bag.png';

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
      <button type='button'>
        <img src={ShoppingBag} alt='ShoppingBagIcon' />
      </button>
    </div>
  );
};

export default SidePanel;
