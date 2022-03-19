import { combineReducers } from 'redux';

import filterReducer from './filter';
import shoppingCartReducer from './shopping-cart';
import productsReducer from './products';

const rootReducer = combineReducers({
  filter: filterReducer,
  shoppingCart: shoppingCartReducer,
  products: productsReducer,
});

export default rootReducer;
