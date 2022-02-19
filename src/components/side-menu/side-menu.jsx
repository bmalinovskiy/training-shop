import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import { MenuContext } from '../../context/nav-state';

import { MENU } from '../../constants/header';

import styles from './side-menu.module.scss';

const SideMenu = () => {
  const { isMenuOpen } = useContext(MenuContext);

  const SideMenuClass = classNames({ [styles.container]: true, [styles.open]: isMenuOpen });

  return (
    <nav className={SideMenuClass}>
      {MENU.map(({ id, path, name }) => (
        <Link key={id} to={path} className={styles.link}>
          <span>{name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default SideMenu;
