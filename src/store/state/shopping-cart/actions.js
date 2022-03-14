import { SET_SHOPPING_CART_OPEN, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CHANGE_QUANTITY } from './types';

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

export const changeQuantity = (payload) => ({
  type: CHANGE_QUANTITY,
  payload,
});
