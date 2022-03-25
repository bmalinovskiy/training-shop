import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,
  SET_CURRENT_PRODUCT,
} from './types';

const initialState = {
  isLoading: false,
  products: {
    men: [],
    women: [],
  },
  currentProduct: {},
  error: null,
  productError: null,
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
    case GET_PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCT_BY_ID_SUCCESS: {
      const { currentProduct } = payload;

      return {
        ...state,
        isLoading: false,
        productError: null,
        currentProduct,
      };
    }
    case GET_PRODUCT_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        productError: payload.error,
        currentProduct: {},
      };
    case SET_CURRENT_PRODUCT: {
      const { currentProduct } = payload;

      return {
        ...state,
        currentProduct,
      };
    }
    default:
      return state;
  }
};