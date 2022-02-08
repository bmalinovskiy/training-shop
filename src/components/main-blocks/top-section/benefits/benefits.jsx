import React from 'react';

import { BENEFITS } from '../../../../constants/main-blocks';

import styles from './benefits.module.scss';

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      {BENEFITS.map(({ id, title, text, name, imgPath }) => (
        <div key={id} className={styles.benefit}>
          <img src={imgPath} alt={name} />
          <div className={styles.benefitTextBlock}>
            <span className={styles.benefitTitle}>{title}</span>
            <span className={styles.benefitText}>{text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
