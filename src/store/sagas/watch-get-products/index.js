import { all, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { GET_PRODUCTS } from '../../../constants/api';

import { GET_PRODUCTS_REQUEST } from '../../state/products/types';

import { getProductsSuccess, getProductsFailure } from '../../state/products/actions';

function* getProducts() {
  try {
    const { data } = yield call(axios.get, GET_PRODUCTS);
    yield put(getProductsSuccess({ products: data }));
  } catch (e) {
    yield put(getProductsFailure({ error: e.message }));
  }
}

function* watchGetProducts() {
  yield all([takeLatest(GET_PRODUCTS_REQUEST, getProducts)]);
}

export default watchGetProducts;
