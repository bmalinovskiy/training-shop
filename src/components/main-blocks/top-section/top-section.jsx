import React from 'react';

import Banners from './banners';
import Benefits from './benefits';

import styles from './top-section.module.scss';

const TopSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Banners />
        <Benefits />
        <hr />
      </div>
    </div>
  );
};

export default TopSection;
