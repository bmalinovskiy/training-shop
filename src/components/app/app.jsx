import React from 'react';

import { Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import ProductsPage from '../../pages/products-page';
import ProductPage from '../../pages/product-page';

import ROUTES from '../../constants/routes';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.root} element={<MainPage />} />
      <Route path={ROUTES.women} element={<ProductsPage productType='women' title='WOMEN' />} />
      <Route path={ROUTES.men} element={<ProductsPage productType='men' title='MEN' />} />
      <Route
        path='women/1'
        element={
          <ProductPage
            headerProps={{
              title: `Women's tracksuit Q109`,
              productType: 'women',
              productId: '1',
              rating: '5',
              sku: '777',
              availability: 'In Stock',
            }}
            productType='women'
          />
        }
      />
      <Route
        path='men/1'
        element={
          <ProductPage
            headerProps={{
              title: `Striped Sweatshirt`,
              productType: 'men',
              productId: '1',
              rating: '5',
              sku: '777',
              availability: 'In Stock',
            }}
            productType='men'
          />
        }
      />
    </Routes>
  );
};

export default App;
