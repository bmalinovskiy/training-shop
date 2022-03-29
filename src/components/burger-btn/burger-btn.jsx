import React, { useContext } from 'react';

import classNames from 'classnames';

import { MenuContext } from '../../context/nav-state';

import styles from './burger-btn.module.scss';

const BurgerBtn = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const handleMenuToggle = () => {
    toggleMenuMode();
  };

  const burgerBtnClass = classNames({ [styles.burgerBtn]: true, [styles.active]: isMenuOpen });

  return (
    <button type='button' className={burgerBtnClass} onMouseDown={handleMenuToggle} data-test-id='burger-menu-btn'>
      <span />
      <span />
      <span />
    </button>
  );
};

export default BurgerBtn;
