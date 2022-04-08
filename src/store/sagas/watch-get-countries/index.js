import { all, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { GET_COUNTRIES } from '../../../constants/api';

import { GET_COUNTRIES_REQUEST } from '../../state/shopping-cart/types';

import { getCountriesSuccess, getCountriesFailure } from '../../state/shopping-cart/actions';

function* getCountries() {
  try {
    const { data } = yield call(axios.get, GET_COUNTRIES);
    yield put(getCountriesSuccess({ data }));
  } catch (e) {
    yield put(getCountriesFailure({ error: e.message }));
  }
}

function* watchGetCountries() {
  yield all([takeLatest(GET_COUNTRIES_REQUEST, getCountries)]);
}

export default watchGetCountries;
