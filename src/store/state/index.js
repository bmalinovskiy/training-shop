import { combineReducers } from 'redux';

import filterReducer from './filter';
import shoppingCartReducer from './shopping-cart';

const rootReducer = combineReducers({
  filter: filterReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;
