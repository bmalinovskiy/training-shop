import {
  CHANGE_COLOR_FILTER,
  CHANGE_SIZE_FILTER,
  CHANGE_BRAND_FILTER,
  CHANGE_PRICE_FILTER,
  RESET_FILTERS,
  SET_ITEMS_FOUND,
  SET_FILTER_OPEN,
} from './types';

export const changeColorFilter = (payload) => ({
  type: CHANGE_COLOR_FILTER,
  payload,
});

export const changeSizeFilter = (payload) => ({
  type: CHANGE_SIZE_FILTER,
  payload,
});

export const changeBrandFilter = (payload) => ({
  type: CHANGE_BRAND_FILTER,
  payload,
});

export const changePriceFilter = (payload) => ({
  type: CHANGE_PRICE_FILTER,
  payload,
});

export const resetFilters = () => ({
  type: RESET_FILTERS,
});

export const setItemsFound = (payload) => ({
  type: SET_ITEMS_FOUND,
  payload,
});

export const setFilterOpen = (payload) => ({
  type: SET_FILTER_OPEN,
  payload,
});
