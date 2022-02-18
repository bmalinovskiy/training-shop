import React from 'react';

import TopSection from './top-section';
import Products from './products';
import Sale from './sale';
import SpecialOffer from './special-offer';
import LatestFromBlog from './latest-from-blog';

const MainBlocks = () => {
  return (
    <>
      <TopSection />
      <Products title={`WOMEN'S`} productType='women' />
      <Products title={`MEN'S`} productType='men' />
      <Sale />
      <SpecialOffer />
      <LatestFromBlog />
    </>
  );
};

export default MainBlocks;
