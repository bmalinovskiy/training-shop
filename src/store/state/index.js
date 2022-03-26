import { combineReducers } from 'redux';

import filterReducer from './filter';
import shoppingCartReducer from './shopping-cart';
import productsReducer from './products';
import formReducer from './form';

const rootReducer = combineReducers({
  filter: filterReducer,
  shoppingCart: shoppingCartReducer,
  products: productsReducer,
  form: formReducer,
});

export default rootReducer;
