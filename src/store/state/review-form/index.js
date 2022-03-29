import { SET_REVIEW_MODAL_OPEN, SEND_REVIEW_REQUEST, SEND_REVIEW_SUCCESS, SEND_REVIEW_FAILURE } from './types';

const initialState = {
  isModalOpen: false,
  isLoading: false,
  error: null,
  responce: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_REVIEW_MODAL_OPEN: {
      const { isModalOpen } = payload;

      return {
        ...state,
        isModalOpen,
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
