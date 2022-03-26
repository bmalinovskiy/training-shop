import { CHANGE_FILTER, RESET_FILTERS, SET_ITEMS_FOUND, SET_FILTER_OPEN } from './types';

export const setFilterOpen = (payload) => ({
  type: SET_FILTER_OPEN,
  payload,
});

export const changeFilter = (payload) => ({
  type: CHANGE_FILTER,
  payload,
});

export const resetFilters = (payload) => ({
  type: RESET_FILTERS,
  payload,
});

export const setItemsFound = (payload) => ({
  type: SET_ITEMS_FOUND,
  payload,
});
