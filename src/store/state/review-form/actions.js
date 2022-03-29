import { SET_REVIEW_MODAL_OPEN, SEND_REVIEW_REQUEST, SEND_REVIEW_SUCCESS, SEND_REVIEW_FAILURE } from './types';

export const setReviewModalOpen = (payload) => ({
  type: SET_REVIEW_MODAL_OPEN,
  payload,
});

export const sendReviewRequest = (payload) => ({
  type: SEND_REVIEW_REQUEST,
  payload,
});

export const sendReviewSuccess = (payload) => ({
  type: SEND_REVIEW_SUCCESS,
  payload,
});

export const sendReviewFailure = (payload) => ({
  type: SEND_REVIEW_FAILURE,
  payload,
});
