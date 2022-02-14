import React from 'react';

import { Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import ProductsPage from '../../pages/products-page';
import ProductPage from '../../pages/product-page';

import ROUTES from '../../constants/routes';

import { WOMENS_PRODUCTS } from '../../constants/womens-products';
import { MENS_PRODUCTS } from '../../constants/mens-products';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.root} element={<MainPage />} />
      <Route path={ROUTES.women} element={<ProductsPage products={WOMENS_PRODUCTS} title='WOMEN' />} />
      <Route path={ROUTES.men} element={<ProductsPage products={MENS_PRODUCTS} title='MEN' />} />
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
          />
        }
      />
    </Routes>
  );
};

export default App;
