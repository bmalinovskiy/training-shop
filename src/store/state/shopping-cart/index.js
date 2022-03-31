import { SET_SHOPPING_CART_OPEN, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CHANGE_QUANTITY } from './types';

const initialState = {
  isShoppingCartOpen: false,
  items: [],
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
      const value = payload;
      return {
        ...state,
        items: [...state.items, value],
      };
    }
    case REMOVE_ITEM_FROM_CART: {
      const { id } = payload;

      return {
        ...state,
        items: state.items.filter((item) => item.id !== id),
      };
    }
    case CHANGE_QUANTITY: {
      const { id, value } = payload;
      const items = state.items.map((item) => ({
        ...item,
        quantity: item.id === id && value > 0 ? value : item.quantity,
      }));
      return {
        ...state,
        items,
      };
    }
    default:
      return state;
  }
};
