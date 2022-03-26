import { all, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { SEND_EMAIL } from '../../../constants/api';

import { SEND_EMAIL_REQUEST } from '../../state/form/types';

import { sendEmailSuccess, sendEmailFailure } from '../../state/form/actions';

function* sendEmail({ payload }) {
  const email = payload;

  try {
    const responce = yield call(axios.post, SEND_EMAIL, email);
    yield put(sendEmailSuccess({ responce }));
  } catch (e) {
    yield put(sendEmailFailure({ error: e.message, responce: {} }));
  }
}

function* watchSendEmail() {
  yield all([takeLatest(SEND_EMAIL_REQUEST, sendEmail)]);
}

export default watchSendEmail;
