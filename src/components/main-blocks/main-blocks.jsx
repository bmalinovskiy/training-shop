import React from 'react';

import TopSection from './top-section';
import Products from './products';
import Sale from './sale';
import SpecialOffer from './special-offer';
import LatestFromBlog from './latest-from-blog';

import { WOMENS_PRODUCTS } from '../../constants/womens-products';
import { MENS_PRODUCTS } from '../../constants/mens-products';

import styles from './main-blocks.module.scss';

const MainBlocks = () => {
  return (
    <div className={styles.mainBlocks}>
      <TopSection />
      <Products title={`WOMEN'S`} products={WOMENS_PRODUCTS} productType='women' />
      <Products title={`MEN'S`} products={MENS_PRODUCTS} productType='men' />
      <Sale />
      <SpecialOffer />
      <LatestFromBlog />
    </div>
  );
};

export default MainBlocks;
