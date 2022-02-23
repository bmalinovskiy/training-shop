import React, { useRef, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import useOnClickOutside from '../../hooks/on-click-outside';

import { MenuContext } from '../../context/nav-state';

import { MENU } from '../../constants/header';

import styles from './burger-menu.module.scss';

const BurgerMenu = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const BurgerMenuClass = classNames({ [styles.container]: true, [styles.open]: isMenuOpen });

  const node = useRef();
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'auto';
  }, [isMenuOpen]);

  return (
    <nav className={BurgerMenuClass} ref={node} data-test-id='burger-menu'>
      {MENU.map(({ id, path, name }) => (
        <Link key={id} to={path} className={styles.link}>
          <span>{name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BurgerMenu;
