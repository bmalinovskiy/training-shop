import React, { useRef, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import useOnClickOutside from '../../hooks/on-click-outside';

import { MenuContext } from '../../context/nav-state';

import { MENU } from '../../constants/header';

import styles from './side-menu.module.scss';

const SideMenu = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const SideMenuClass = classNames({ [styles.container]: true, [styles.open]: isMenuOpen });

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
    <nav className={SideMenuClass} ref={node}>
      {MENU.map(({ id, path, name }) => (
        <Link key={id} to={path} className={styles.link}>
          <span>{name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default SideMenu;
