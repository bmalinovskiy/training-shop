import React from 'react';

import { PAYMENT_ICONS } from '../../../constants/footer';

import styles from './footer-bottom-bar.module.scss';

const FooterBottomBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.copyright}>Copyright © 2022 all rights reserved</span>
        <div className={styles.icons}>
          {PAYMENT_ICONS.map(({ id, path, name }) => (
            <img key={id} src={path} alt={name} className={styles.icon} />
          ))}
        </div>
        <a href='https://clevertec.ru/study/frontend.html' className={styles.link}>
          Clevertec.ru/training
        </a>
      </div>
    </div>
  );
};

export default FooterBottomBar;
