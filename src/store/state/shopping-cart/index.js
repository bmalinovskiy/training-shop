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

import { removeItem, changeQuantity } from '../../../utils/shopping-cart';

const initialState = {
  isShoppingCartOpen: false,
  isLoading: false,
  error: null,
  message: null,
  items: [],
  countries: [],
  cities: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SHOPPING_CART_OPEN: {
      const { isShoppingCartOpen } = payload;

      return {
        ...state,
        isShoppingCartOpen,
      };
    }
    case ADD_ITEM_TO_CART: {
      const { item } = payload;

      return {
        ...state,
        items: [...state.items, item],
      };
    }
    case REMOVE_ITEM_FROM_CART: {
      const { id } = payload;

      return {
        ...state,
        items: removeItem(state.items, id),
      };
    }
    case REMOVE_ALL_ITEMS:
      return {
        ...state,
        items: [],
      };
    case CHANGE_QUANTITY: {
      const { id, value } = payload;

      const items = state.items.map((item) => ({
        ...item,
        quantity: changeQuantity(item, id, value),
      }));

      return {
        ...state,
        items,
      };
    }
    case GET_COUNTRIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COUNTRIES_SUCCESS: {
      const { data } = payload;

      const countries = data.map(({ name }) => name);

      return {
        ...state,
        countries,
        isLoading: false,
        error: null,
      };
    }
    case GET_COUNTRIES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        countries: [],
      };
    }
    case GET_CITIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CITIES_SUCCESS: {
      const { data } = payload;

      const cities = data.map(({ city }) => city);

      return {
        ...state,
        cities,
        isLoading: false,
        error: null,
      };
    }
    case GET_CITIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        cities: [],
      };
    case MAKE_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case MAKE_ORDER_SUCCESS: {
      const { message } = payload;

      return {
        ...state,
        isLoading: false,
        error: null,
        message,
      };
    }
    case MAKE_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case CLEAR_ORDER_MESSAGE:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};
