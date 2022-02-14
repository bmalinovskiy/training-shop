import React from 'react';

import { Link } from 'react-router-dom';

import { MENU } from '../../../../constants/header';

import styles from './menu-items.module.scss';

const MenuItems = () => {
  return (
    <div className={styles.menuItems} data-test-id='menu'>
      {MENU.map(({ id, path, name }) => (
        <Link key={id} to={path} data-test-id={`menu-link-${path.substring(1)}`}>
          <span className={styles.menuLink}>{name}</span>
        </Link>
      ))}
    </div>
  );
};

export default MenuItems;
