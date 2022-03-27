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
  responce: null,
  isLoading: false,
  error: null,
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
        responce,
        isLoading: false,
        error: null,
      };
    }
    case SEND_EMAIL_FAILURE: {
      const { error, responce } = payload;

      return {
        ...state,
        isLoading: false,
        responce,
        error,
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
        responce,
        isLoading: false,
        error: null,
      };
    }
    case SEND_REVIEW_FAILURE: {
      const { error } = payload;

      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    default:
      return state;
  }
};
