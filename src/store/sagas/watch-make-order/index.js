import { all, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { MAKE_ORDER } from '../../../constants/api';

import { MAKE_ORDER_REQUEST } from '../../state/shopping-cart/types';

import { makeOrderSuccess, makeOrderFailure } from '../../state/shopping-cart/actions';

function* makeOrder({ payload }) {
  const { order } = payload;

  try {
    const {
      data: { message },
    } = yield call(axios.post, MAKE_ORDER, order);
    yield put(makeOrderSuccess({ message }));
  } catch (e) {
    yield put(makeOrderFailure({ error: e.message }));
  }
}

function* watchMakeOrder() {
  yield all([takeLatest(MAKE_ORDER_REQUEST, makeOrder)]);
}

export default watchMakeOrder;
