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
  colorFilters: [],
  sizeFilters: [],
  brandFilters: [],
  priceFilters: [],
  itemsFound: null,
  isFilterOpen: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_COLOR_FILTER: {
      const { value } = payload;
      return {
        ...state,
        colorFilters: state.colorFilters.includes(value)
          ? state.colorFilters.filter((color) => color !== value)
          : [...state.colorFilters, value],
      };
    }
    case CHANGE_SIZE_FILTER: {
      const { value } = payload;
      return {
        ...state,
        sizeFilters: state.sizeFilters.includes(value)
          ? state.sizeFilters.filter((size) => size !== value)
          : [...state.sizeFilters, value],
      };
    }
    case CHANGE_BRAND_FILTER: {
      const { value } = payload;
      return {
        ...state,
        brandFilters: state.brandFilters.includes(value)
          ? state.brandFilters.filter((brand) => brand !== value)
          : [...state.brandFilters, value],
      };
    }
    case CHANGE_PRICE_FILTER: {
      const { value } = payload;
      return {
        ...state,
        priceFilters: state.priceFilters.includes(value)
          ? state.priceFilters.filter((price) => price !== value)
          : [...state.priceFilters, value],
      };
    }
    case RESET_FILTERS: {
      return {
        ...state,
        colorFilters: [],
        sizeFilters: [],
        brandFilters: [],
        priceFilters: [],
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
