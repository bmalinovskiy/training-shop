import React from 'react';

import styles from './error.module.scss';

const Error = () => {
  return (
    <div className={styles.wrapper} data-test-id='error'>
      Ошибка загрузки данных.
    </div>
  );
};

export default Error;
