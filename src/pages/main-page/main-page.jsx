import React from 'react';

import Header from '../../components/header';
import MainBlocks from '../../components/main-blocks';
import Footer from '../../components/footer';
import ShoppingCart from '../../components/shopping-cart';

const MainPage = () => {
  return (
    <>
      <div className='wrapper' data-test-id='app'>
        <Header />
        <hr />
        <MainBlocks />
        <Footer />
      </div>
      <ShoppingCart />
    </>
  );
};

export default MainPage;
