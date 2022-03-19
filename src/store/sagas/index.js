import { all } from 'redux-saga/effects';

import watchGetProducts from './watch-get-products';
import watchGetProductById from './watch-get-product-by-id';

export function* rootSaga() {
  yield all([watchGetProducts(), watchGetProductById()]);
}
