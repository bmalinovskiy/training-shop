import { all } from 'redux-saga/effects';

import watchGetProducts from './watch-get-products';
import watchGetProductById from './watch-get-product-by-id';
import watchSendEmail from './watch-send-email';
import watchSendReview from './watch-send-review';

export function* rootSaga() {
  yield all([watchGetProducts(), watchGetProductById(), watchSendEmail(), watchSendReview()]);
}
