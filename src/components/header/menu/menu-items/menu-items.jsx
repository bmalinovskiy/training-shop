import React from 'react';

import { Link } from 'react-router-dom';

import { MENU } from '../../../../constants/menu';

import styles from './menu-items.module.scss';

const MenuItems = () => {
  return (
    <div className={styles.menuItems}>
      {MENU.map(({ id, path, name }) => (
        <Link key={id} to={path}>
          <span className={styles.menuLink}>{name}</span>
        </Link>
      ))}
    </div>
  );
};

export default MenuItems;
