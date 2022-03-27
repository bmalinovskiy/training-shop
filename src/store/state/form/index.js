import {
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
  SET_REVIEW_MODAL_OPEN,
  SEND_REVIEW_REQUEST,
  SEND_REVIEW_SUCCESS,
  SEND_REVIEW_FAILURE,
} from './types';

const initialState = {
  emailResponce: null,
  reviewResponce: null,
  isLoading: false,
  emailError: null,
  reviewError: null,
  isReviewModalOpen: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_EMAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SEND_EMAIL_SUCCESS: {
      const { responce } = payload;

      return {
        ...state,
        emailResponce: responce,
        isLoading: false,
        emailError: null,
      };
    }
    case SEND_EMAIL_FAILURE: {
      const { error, responce } = payload;

      return {
        ...state,
        isLoading: false,
        emailResponce: responce,
        emailError: error,
      };
    }
    case SET_REVIEW_MODAL_OPEN: {
      const isReviewModalOpen = payload;

      return {
        ...state,
        isReviewModalOpen,
      };
    }
    case SEND_REVIEW_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SEND_REVIEW_SUCCESS: {
      const { responce } = payload;

      return {
        ...state,
        reviewResponce: responce,
        isLoading: false,
        reviewError: null,
      };
    }
    case SEND_REVIEW_FAILURE: {
      const { error } = payload;

      return {
        ...state,
        isLoading: false,
        reviewError: error,
      };
    }
    default:
      return state;
  }
};
