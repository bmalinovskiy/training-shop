import React from 'react';

import HeaderTopBar from './header-top-bar';
import HeaderMenuBar from './header-menu-bar';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.wrapper} data-test-id='header'>
      <HeaderTopBar />
      <HeaderMenuBar />
    </header>
  );
};

export default Header;
