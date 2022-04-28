import { all, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { GET_CITIES } from '../../../constants/api';

import { GET_CITIES_REQUEST } from '../../state/shopping-cart/types';

import { getCitiesSuccess, getCitiesFailure } from '../../state/shopping-cart/actions';

function* getCities({ payload }) {
  const { searchValue } = payload;

  try {
    const { data } = yield call(axios.post, GET_CITIES, searchValue);
    yield put(getCitiesSuccess({ data }));
  } catch (e) {
    yield put(getCitiesFailure({ error: e.message }));
  }
}

function* watchGetCities() {
  yield all([takeLatest(GET_CITIES_REQUEST, getCities)]);
}

export default watchGetCities;
