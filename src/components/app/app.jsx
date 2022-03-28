import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter, Routes, Route } from 'react-router-dom';

import BlockUi from 'react-block-ui';

import Loader from '../loader';
import ScrollToTop from '../scroll-to-top';

import MainPage from '../../pages/main-page';
import ProductsPage from '../../pages/products-page';
import ProductPage from '../../pages/product-page';
import NotFoundPage from '../../pages/not-found-page';

import { productsSelector } from '../../selectors';

import { getProductsRequest } from '../../store/state/products/actions';

import ROUTES from '../../constants/routes';

import 'react-block-ui/style.css';

const App = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector(productsSelector);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    if ((!products.men.length || !products.women.length) && !error) {
      dispatch(getProductsRequest());
    }
  }, [dispatch, error, products]);

  return (
    <BlockUi blocking={isLoading} loader={<Loader />} keepInView>
      <HashRouter>
        <ScrollToTop>
          <Routes>
            <Route path={ROUTES.root} element={<MainPage />} />
            <Route path={ROUTES.women} element={<ProductsPage productType='women' title='WOMEN' />} />
            <Route path={ROUTES.men} element={<ProductsPage productType='men' title='MEN' />} />
            <Route path={ROUTES.product} element={<ProductPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </ScrollToTop>
      </HashRouter>
    </BlockUi>
  );
};

export default App;
