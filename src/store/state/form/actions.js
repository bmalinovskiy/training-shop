import {
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
  SET_REVIEW_MODAL_OPEN,
  SEND_REVIEW_REQUEST,
  SEND_REVIEW_SUCCESS,
  SEND_REVIEW_FAILURE,
} from './types';

export const sendEmailRequest = (payload) => ({
  type: SEND_EMAIL_REQUEST,
  payload,
});

export const sendEmailSuccess = (payload) => ({
  type: SEND_EMAIL_SUCCESS,
  payload,
});

export const sendEmailFailure = (payload) => ({
  type: SEND_EMAIL_FAILURE,
  payload,
});

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
