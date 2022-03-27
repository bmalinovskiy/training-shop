import { all } from 'redux-saga/effects';

import watchGetProducts from './watch-get-products';
import watchSendEmail from './watch-send-email';
import watchSendReview from './watch-send-review';

export function* rootSaga() {
  yield all([watchGetProducts(), watchSendEmail(), watchSendReview()]);
}
