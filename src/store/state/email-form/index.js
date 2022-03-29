import { SEND_EMAIL_REQUEST, SEND_EMAIL_SUCCESS, SEND_EMAIL_FAILURE } from './types';

const initialState = {
  main: {
    isLoading: false,
    error: null,
    responce: null,
  },
  footer: {
    isLoading: false,
    error: null,
    responce: null,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_EMAIL_REQUEST: {
      const { formType } = payload;

      return {
        ...state,
        [formType]: { ...state[formType], isLoading: true },
      };
    }
    case SEND_EMAIL_SUCCESS: {
      const { formType, responce } = payload;

      return {
        ...state,
        [formType]: { ...state[formType], responce, isLoading: false, error: null },
      };
    }
    case SEND_EMAIL_FAILURE: {
      const { formType, error, responce } = payload;

      return {
        ...state,
        [formType]: { ...state[formType], isLoading: false, error, responce },
      };
    }
    default:
      return state;
  }
};
