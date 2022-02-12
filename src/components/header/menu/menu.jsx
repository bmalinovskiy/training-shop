import React from 'react';

import { Link } from 'react-router-dom';

import SidePanel from './side-panel';
import MenuItems from './menu-items';

import Logo from '../../../images/header/logo.svg';

import styles from './menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <Link to='/training-shop'>
          <img src={Logo} alt='Logo' />
        </Link>
        <MenuItems />
        <SidePanel />
      </div>
    </div>
  );
};

export default Menu;
