import { all, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { SEND_REVIEW } from '../../../constants/api';

import { SEND_REVIEW_REQUEST } from '../../state/form/types';

import { sendReviewSuccess, sendReviewFailure } from '../../state/form/actions';

function* sendReview({ payload }) {
  const review = payload;

  try {
    const responce = yield call(axios.post, SEND_REVIEW, review);
    yield put(sendReviewSuccess({ responce }));
  } catch (e) {
    yield put(sendReviewFailure({ error: e.message }));
  }
}

function* watchSendReview() {
  yield all([takeLatest(SEND_REVIEW_REQUEST, sendReview)]);
}

export default watchSendReview;
