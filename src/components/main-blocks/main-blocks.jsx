import React from 'react';

import TopSection from './top-section';
import Products from './products';
import Sale from './sale';
import SpecialOffer from './special-offer';
import LatestFromBlog from './latest-from-blog';

import { WOMENS_CLOTHES } from '../../constants/womens-clothes';
import { MENS_CLOTHES } from '../../constants/mens-clothes';

import styles from './main-blocks.module.scss';

const MainBlocks = () => {
  return (
    <div className={styles.mainBlocks}>
      <TopSection />
      <Products title={`WOMEN'S`} typeOfProducts={WOMENS_CLOTHES} />
      <Products title={`MEN'S`} typeOfProducts={MENS_CLOTHES} />
      <Sale />
      <SpecialOffer />
      <LatestFromBlog />
    </div>
  );
};

export default MainBlocks;
