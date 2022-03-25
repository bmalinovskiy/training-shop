import { all, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { GET_PRODUCT_BY_ID_REQUEST } from '../../state/products/types';

import { getProductByIdSuccess, getProductByIdFailure } from '../../state/products/actions';

import { PRODUCT_BY_ID } from '../../../constants/api';

import { constructUrl } from '../../../utils/construct-url';

function* getProductById({ payload }) {
  const { id } = payload;

  try {
    const { data } = yield call(axios.get, constructUrl(PRODUCT_BY_ID, id));
    yield put(getProductByIdSuccess({ currentProduct: data }));
  } catch (e) {
    yield put(getProductByIdFailure({ error: e.message }));
  }
}

function* watchGetProductById() {
  yield all([takeLatest(GET_PRODUCT_BY_ID_REQUEST, getProductById)]);
}

export default watchGetProductById;