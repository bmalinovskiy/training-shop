import React from 'react';

import { Link } from 'react-router-dom';

import SidePanel from './side-panel';
import MenuItems from './menu-items';

import styles from './menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <Link to='/'>
          <span className={styles.logo}>CleverShop</span>
        </Link>
        <MenuItems />
        <SidePanel />
      </div>
      <hr />
    </div>
  );
};

export default Menu;
