import {
  SET_SHOPPING_CART_OPEN,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ALL_ITEMS,
  CHANGE_QUANTITY,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE,
  GET_CITIES_REQUEST,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_FAILURE,
  CLEAR_ORDER_MESSAGE,
} from './types';

export const setShoppingCartOpen = (payload) => ({
  type: SET_SHOPPING_CART_OPEN,
  payload,
});

export const addItemToCart = (payload) => ({
  type: ADD_ITEM_TO_CART,
  payload,
});

export const removeItemFromCart = (payload) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload,
});

export const removeAllItems = (payload) => ({
  type: REMOVE_ALL_ITEMS,
  payload,
});

export const changeQuantity = (payload) => ({
  type: CHANGE_QUANTITY,
  payload,
});

export const getCountriesRequest = (payload) => ({
  type: GET_COUNTRIES_REQUEST,
  payload,
});

export const getCountriesSuccess = (payload) => ({
  type: GET_COUNTRIES_SUCCESS,
  payload,
});

export const getCountriesFailure = (payload) => ({
  type: GET_COUNTRIES_FAILURE,
  payload,
});

export const getCitiesRequest = (payload) => ({
  type: GET_CITIES_REQUEST,
  payload,
});

export const getCitiesSuccess = (payload) => ({
  type: GET_CITIES_SUCCESS,
  payload,
});

export const getCitiesFailure = (payload) => ({
  type: GET_CITIES_FAILURE,
  payload,
});

export const makeOrderRequest = (payload) => ({
  type: MAKE_ORDER_REQUEST,
  payload,
});

export const makeOrderSuccess = (payload) => ({
  type: MAKE_ORDER_SUCCESS,
  payload,
});

export const makeOrderFailure = (payload) => ({
  type: MAKE_ORDER_FAILURE,
  payload,
});

export const clearOrderMessage = (payload) => ({
  type: CLEAR_ORDER_MESSAGE,
  payload,
});
