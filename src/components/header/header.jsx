import React from 'react';

import TopBar from './top-bar';
import Menu from './menu';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <TopBar />
      <Menu />
    </header>
  );
};

export default Header;
