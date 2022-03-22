import React from 'react';

import styles from './loader.module.scss';

const Loader = () => {
  return <div className={styles.wrapper} data-test-id='loader' />;
};

export default Loader;
