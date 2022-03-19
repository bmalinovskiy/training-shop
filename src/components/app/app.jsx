import React from 'react';
import { useSelector } from 'react-redux';
import { HashRouter, Routes, Route } from 'react-router-dom';

import BlockUi from 'react-block-ui';

import MainPage from '../../pages/main-page';
import ProductsPage from '../../pages/products-page';
import ProductPage from '../../pages/product-page';

import { productsSelector } from '../../selectors';

import ROUTES from '../../constants/routes';

import 'react-block-ui/style.css';

const App = () => {
  const { isLoading } = useSelector(productsSelector);

  return (
    <BlockUi blocking={isLoading}>
      <HashRouter>
        <Routes>
          <Route path={ROUTES.root} element={<MainPage />} />
          <Route path={ROUTES.women} element={<ProductsPage productType='women' title='WOMEN' />} />
          <Route path={ROUTES.men} element={<ProductsPage productType='men' title='MEN' />} />
          <Route path='/:category/:id' element={<ProductPage />} />
        </Routes>
      </HashRouter>
    </BlockUi>
  );
};

export default App;
