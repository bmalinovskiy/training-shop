import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from './types';

const initialState = {
  isLoading: false,
  products: {
    men: [],
    women: [],
  },
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_SUCCESS: {
      const { products } = payload;

      return {
        ...state,
        isLoading: false,
        error: null,
        products,
      };
    }
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        products: {
          men: [],
          women: [],
        },
      };
    default:
      return state;
  }
};
