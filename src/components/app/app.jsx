import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter, Routes, Route } from 'react-router-dom';

import BlockUi from 'react-block-ui';

import Loader from '../loader';

import MainPage from '../../pages/main-page';
import ProductsPage from '../../pages/products-page';
import ProductPage from '../../pages/product-page';
import NotFoundPage from '../../pages/not-found-page';

import { productsSelector } from '../../selectors';
import { formSelector } from '../../selectors/form';

import { getProductsRequest } from '../../store/state/products/actions';

import ROUTES from '../../constants/routes';

import 'react-block-ui/style.css';

const App = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector(productsSelector);
  const { responce } = useSelector(formSelector);

  useEffect(() => {
    if ((!products.men.length || !products.women.length) && !error) {
      dispatch(getProductsRequest());
    }
  }, [dispatch, error, products]);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch, responce]);

  return (
    <BlockUi blocking={isLoading} loader={<Loader />} keepInView>
      <HashRouter>
        <Routes>
          <Route path={ROUTES.root} element={<MainPage />} />
          <Route path={ROUTES.women} element={<ProductsPage productType='women' title='WOMEN' />} />
          <Route path={ROUTES.men} element={<ProductsPage productType='men' title='MEN' />} />
          <Route path={ROUTES.product} element={<ProductPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </BlockUi>
  );
};

export default App;
