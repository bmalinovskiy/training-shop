import React from 'react';

import { PAYMENT_ICONS } from '../../../constants/footer';

import styles from './bottom-bar.module.scss';

const BottomBar = () => {
  return (
    <div className={styles.bottomBar}>
      <div className={styles.container}>
        <span>Copyright © 2032 all rights reserved</span>
        <div className={styles.icons}>
          {PAYMENT_ICONS.map(({ id, path, name }) => (
            <img key={id} src={path} alt={name} />
          ))}
        </div>
        <a href='https://clevertec.ru/study/frontend.html'>Clevertec.ru/training</a>
      </div>
    </div>
  );
};

export default BottomBar;
