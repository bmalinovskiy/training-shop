import { combineReducers } from 'redux';

import filterReducer from './filter';
import shoppingCartReducer from './shopping-cart';
import productsReducer from './products';
import reviewFormReducer from './review-form';
import emailFormReducer from './email-form';

const rootReducer = combineReducers({
  filter: filterReducer,
  shoppingCart: shoppingCartReducer,
  products: productsReducer,
  reviewForm: reviewFormReducer,
  emailForm: emailFormReducer,
});

export default rootReducer;
