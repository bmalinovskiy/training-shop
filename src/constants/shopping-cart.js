import payPalIcon from '../images/shopping-cart/pay-pal.svg';
import visaIcon from '../images/shopping-cart/visa.svg';
import mastercardIcon from '../images/shopping-cart/mastercard.svg';

export const ORDER_SUCCESS = 'success';
export const ORDER_ERROR = 'error';

export const DELIVERY_METHODS = [
  { id: '1', text: 'Pickup from post offices' },
  { id: '2', text: 'Express delivery' },
  { id: '3', text: 'Store pickup' },
];

export const PAYMENT_METHODS = [
  { id: '1', name: 'PayPal', imgPath: payPalIcon },
  { id: '2', name: 'Visa', imgPath: visaIcon },
  { id: '3', name: 'Mastercard', imgPath: mastercardIcon },
];
