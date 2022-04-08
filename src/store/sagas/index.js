import { all } from 'redux-saga/effects';

import watchGetProducts from './watch-get-products';
import watchSendEmail from './watch-send-email';
import watchSendReview from './watch-send-review';
import watchGetCountries from './watch-get-countries';
import watchGetCities from './watch-get-cities';
import watchMakeOrder from './watch-make-order';

export function* rootSaga() {
  yield all([
    watchGetProducts(),
    watchSendEmail(),
    watchSendReview(),
    watchGetCountries(),
    watchGetCities(),
    watchMakeOrder(),
  ]);
}
