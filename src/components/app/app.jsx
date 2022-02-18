import React from 'react';

import { Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import ProductsPage from '../../pages/products-page';
import ProductPage from '../../pages/product-page';

import ROUTES from '../../constants/routes';
import { PRODUCTS } from '../../constants/products';

const App = () => {
  const productRoutes = Object.values(PRODUCTS).map((products) =>
    products.map(({ id, category }) => (
      <Route key={id} path={`/${category}/${id}`} element={<ProductPage productType={category} />} />
    ))
  );
  return (
    <Routes>
      <Route path={ROUTES.root} element={<MainPage />} />
      <Route path={ROUTES.women} element={<ProductsPage productType='women' title='WOMEN' />} />
      <Route path={ROUTES.men} element={<ProductsPage productType='men' title='MEN' />} />
      {productRoutes}
    </Routes>
  );
};

export default App;
