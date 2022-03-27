import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from './types';

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
