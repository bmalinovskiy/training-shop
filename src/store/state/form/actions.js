import { SEND_EMAIL_REQUEST, SEND_EMAIL_SUCCESS, SEND_EMAIL_FAILURE } from './types';

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
