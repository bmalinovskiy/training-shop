import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import ProductsPage from '../../pages/products-page';
import ProductPage from '../../pages/product-page';

import ROUTES from '../../constants/routes';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.root} element={<MainPage />} />
        <Route path={ROUTES.women} element={<ProductsPage productType='women' title='WOMEN' />} />
        <Route path={ROUTES.men} element={<ProductsPage productType='men' title='MEN' />} />
        <Route path='/:category/:id' element={<ProductPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
