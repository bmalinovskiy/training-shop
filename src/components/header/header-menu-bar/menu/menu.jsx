import React from 'react';

import { Link } from 'react-router-dom';

import { MENU } from '../../../../constants/header';

import styles from './menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.container} data-test-id='menu'>
      {MENU.map(({ id, path, name }) => (
        <Link key={id} to={path} data-test-id={`menu-link-${path.substring(1)}`}>
          <span className={styles.link}>{name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
