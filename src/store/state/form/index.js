import { SEND_EMAIL_REQUEST, SEND_EMAIL_SUCCESS, SEND_EMAIL_FAILURE } from './types';

const initialState = {
  responce: null,
  isLoading: false,
  error: null,
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
    default:
      return state;
  }
};
