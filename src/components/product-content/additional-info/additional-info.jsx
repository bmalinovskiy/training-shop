import React from 'react';

import styles from './additional-info.module.scss';

const AdditionalInfo = ({ infoList }) => {
  return (
    <div className={styles.additionalInfo}>
      <span className={styles.infoTitle}>ADDITIONAL INFORMATION</span>
      <div className={styles.infoText}>
        {infoList.map(({ id, name, value }) => (
          <div key={id} className={styles.textItem}>
            <span className={styles.itemName}>{name}:</span>
            <span className={styles.itemValue}>
              {value.map((item) => (item !== value[value.length - 1] ? `${item}, ` : item))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalInfo;
