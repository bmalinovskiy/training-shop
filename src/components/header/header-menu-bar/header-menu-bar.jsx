import React from 'react';

import { Link } from 'react-router-dom';

import SidePanel from './side-panel';
import Menu from './menu';

import Logo from '../../../images/header/logo.svg';

import styles from './header-menu-bar.module.scss';

const HeaderMenuBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link to='/' data-test-id='header-logo-link'>
          <img src={Logo} alt='Logo' />
        </Link>
        <Menu />
        <SidePanel />
      </div>
    </div>
  );
};

export default HeaderMenuBar;
