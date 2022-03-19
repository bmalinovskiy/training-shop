import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,
} from './types';

export const getProductsRequest = (payload) => ({
  type: GET_PRODUCTS_REQUEST,
  payload,
});

export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFailure = (payload) => ({
  type: GET_PRODUCTS_FAILURE,
  payload,
});

export const getProductByIdRequest = (payload) => ({
  type: GET_PRODUCT_BY_ID_REQUEST,
  payload,
});

export const getProductByIdSuccess = (payload) => ({
  type: GET_PRODUCT_BY_ID_SUCCESS,
  payload,
});

export const getProductByIdFailure = (payload) => ({
  type: GET_PRODUCT_BY_ID_FAILURE,
  payload,
});
