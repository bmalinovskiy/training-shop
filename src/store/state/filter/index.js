import { CHANGE_FILTER, RESET_FILTERS, SET_ITEMS_FOUND, SET_FILTER_OPEN } from './types';

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
    case CHANGE_FILTER: {
      const { filterName, value } = payload;
      return {
        ...state,
        [filterName]: state[filterName].includes(value)
          ? state[filterName].filter((item) => item !== value)
          : [...state[filterName], value],
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
