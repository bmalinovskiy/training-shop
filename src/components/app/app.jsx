import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter, Routes, Route } from 'react-router-dom';

import BlockUi from 'react-block-ui';

import MainPage from '../../pages/main-page';
import ProductsPage from '../../pages/products-page';
import ProductPage from '../../pages/product-page';

import { productsSelector } from '../../selectors';

import ROUTES from '../../constants/routes';

import 'react-block-ui/style.css';
import { getProductsRequest } from '../../store/state/products/actions';

const App = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector(productsSelector);

  useEffect(() => {
    if (!products.men.length && !products.women.length && !error) {
      dispatch(getProductsRequest());
    }
  }, [dispatch, error, products]);

  return (
    <BlockUi blocking={isLoading} keepInView>
      <HashRouter>
        <Routes>
          <Route path={ROUTES.root} element={<MainPage />} />
          <Route path={ROUTES.women} element={<ProductsPage productType='women' title='WOMEN' />} />
          <Route path={ROUTES.men} element={<ProductsPage productType='men' title='MEN' />} />
          <Route path={ROUTES.product} element={<ProductPage />} />
        </Routes>
      </HashRouter>
    </BlockUi>
  );
};

export default App;
