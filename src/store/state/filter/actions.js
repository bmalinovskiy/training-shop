import {
  CHANGE_COLOR_FILTER,
  CHANGE_SIZE_FILTER,
  CHANGE_BRAND_FILTER,
  CHANGE_PRICE_FILTER,
  RESET_FILTERS,
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
