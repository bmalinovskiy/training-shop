import React from 'react';

import { BENEFITS } from '../../../../constants/main-blocks';

import styles from './benefits.module.scss';

const Benefits = () => {
  return (
    <div className={styles.container}>
      {BENEFITS.map(({ id, title, text, name, imgPath }) => (
        <div key={id} className={styles.item}>
          <img src={imgPath} alt={name} />
          <div className={styles.description}>
            <span className={styles.title}>{title}</span>
            <span className={styles.text}>{text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
