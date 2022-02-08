import React from 'react';

import TopSection from './top-section';

import styles from './main-blocks.module.scss';

const MainBlocks = () => {
  return (
    <div className={styles.mainBlocks}>
      <TopSection />
    </div>
  );
};

export default MainBlocks;
