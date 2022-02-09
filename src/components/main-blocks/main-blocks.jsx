import React from 'react';

import TopSection from './top-section';
import Sale from './sale';
import SpecialOffer from './special-offer';

import styles from './main-blocks.module.scss';

const MainBlocks = () => {
  return (
    <div className={styles.mainBlocks}>
      <TopSection />
      <Sale />
      <SpecialOffer />
    </div>
  );
};

export default MainBlocks;
