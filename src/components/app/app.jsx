import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import ProductsPage from '../../pages/products-page';
import ProductPage from '../../pages/product-page';

import ROUTES from '../../constants/routes';
import { PRODUCTS } from '../../constants/products';

const App = () => {
  const productRoutes = Object.values(PRODUCTS).map((products) =>
    products.map((product) => (
      <Route
        key={product.id}
        path={`/${product.category}/${product.id}`}
        element={<ProductPage product={product} productType={product.category} />}
      />
    ))
  );

  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.root} element={<MainPage />} />
        <Route path={ROUTES.women} element={<ProductsPage productType='women' title='WOMEN' />} />
        <Route path={ROUTES.men} element={<ProductsPage productType='men' title='MEN' />} />
        {productRoutes}
      </Routes>
    </HashRouter>
  );
};

export default App;
