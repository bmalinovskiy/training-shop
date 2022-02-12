import React from 'react';

import { Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import ProductsPage from '../../pages/products-page';

import { mainPath, womenProductsPath, menProductsPath } from '../../constants/routes';

import { WOMENS_PRODUCTS } from '../../constants/womens-products';
import { MENS_PRODUCTS } from '../../constants/mens-products';

const App = () => {
  return (
    <Routes>
      <Route path={mainPath} element={<MainPage />} />
      <Route
        path={womenProductsPath}
        element={<ProductsPage products={WOMENS_PRODUCTS} productType='women' title='WOMEN' />}
      />
      <Route path={menProductsPath} element={<ProductsPage products={MENS_PRODUCTS} productType='men' title='MEN' />} />
    </Routes>
  );
};

export default App;
