import React from 'react';
import { useSelector } from 'react-redux';

import HeaderTopBar from './header-top-bar';
import HeaderMenuBar from './header-menu-bar';
import Error from '../error';

import { productsSelector } from '../../selectors';

import styles from './header.module.scss';

const Header = () => {
  const { error } = useSelector(productsSelector);

  return (
    <header className={styles.wrapper} data-test-id='header'>
      <HeaderTopBar />
      <HeaderMenuBar />
      {error && <Error />}
    </header>
  );
};

export default Header;
