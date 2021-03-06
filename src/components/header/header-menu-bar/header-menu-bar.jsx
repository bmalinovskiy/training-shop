import React from 'react';
import { Link } from 'react-router-dom';

import NavState from '../../../context/nav-state';

import SidePanel from './side-panel';
import Menu from './menu';
import BurgerMenu from '../../burger-menu';

import Logo from '../../../images/header/logo.svg';

import styles from './header-menu-bar.module.scss';

const HeaderMenuBar = () => {
  return (
    <div className={styles.wrapper}>
      <NavState>
        <div className={styles.container}>
          <Link to='/' className={styles.logo} data-test-id='header-logo-link'>
            <img src={Logo} alt='Logo' />
          </Link>
          <Menu />
          <SidePanel />
        </div>
        <BurgerMenu />
      </NavState>
    </div>
  );
};

export default HeaderMenuBar;
