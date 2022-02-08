import React from 'react';

import Header from '../../components/header';
import MainBlocks from '../../components/main-blocks';
import Footer from '../../components/footer';

const MainPage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <MainBlocks />
      <Footer />
    </div>
  );
};

export default MainPage;
