import {
  CHANGE_COLOR_FILTER,
  CHANGE_SIZE_FILTER,
  CHANGE_BRAND_FILTER,
  CHANGE_PRICE_FILTER,
  RESET_FILTERS,
  SET_ITEMS_FOUND,
  SET_FILTER_OPEN,
} from './types';

const initialState = {
  colors: [],
  sizes: [],
  brands: [],
  prices: [],
  itemsFound: null,
  isFilterOpen: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_COLOR_FILTER: {
      const { value } = payload;
      return {
        ...state,
        colors: state.colors.includes(value)
          ? state.colors.filter((color) => color !== value)
          : [...state.colors, value],
      };
    }
    case CHANGE_SIZE_FILTER: {
      const { value } = payload;
      return {
        ...state,
        sizes: state.sizes.includes(value) ? state.sizes.filter((size) => size !== value) : [...state.sizes, value],
      };
    }
    case CHANGE_BRAND_FILTER: {
      const { value } = payload;
      return {
        ...state,
        brands: state.brands.includes(value)
          ? state.brands.filter((brand) => brand !== value)
          : [...state.brands, value],
      };
    }
    case CHANGE_PRICE_FILTER: {
      const { value } = payload;
      return {
        ...state,
        prices: state.prices.includes(value)
          ? state.prices.filter((price) => price !== value)
          : [...state.prices, value],
      };
    }
    case RESET_FILTERS: {
      return {
        ...state,
        colors: [],
        sizes: [],
        brands: [],
        prices: [],
      };
    }
    case SET_ITEMS_FOUND: {
      const itemsFound = payload;
      return {
        ...state,
        itemsFound,
      };
    }
    case SET_FILTER_OPEN: {
      const isFilterOpen = payload;
      return {
        ...state,
        isFilterOpen,
      };
    }
    default:
      return state;
  }
};
