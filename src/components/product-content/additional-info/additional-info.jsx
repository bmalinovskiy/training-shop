import React from 'react';

import styles from './additional-info.module.scss';

const AdditionalInfo = ({ infoList }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>ADDITIONAL INFORMATION</span>
      <div className={styles.text}>
        {infoList.map(({ id, name, items }) => (
          <div key={id} className={styles.item}>
            <span className={styles.name}>{name}:</span>
            <span className={styles.value}>
              {items.map((item) => (item !== items[items.length - 1] ? `${item}, ` : item))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalInfo;
