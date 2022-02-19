import React, { useContext } from 'react';

import classNames from 'classnames';

import { MenuContext } from '../../context/nav-state';

import styles from './hamburger-button.module.scss';

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  const hamburgerButtonClass = classNames({ [styles.btn]: true, [styles.active]: isMenuOpen });

  return (
    <button type='button' className={hamburgerButtonClass} onClick={clickHandler}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default HamburgerButton;
