import truckIcon from '../images/product/truck.svg';
import refreshIcon from '../images/product/refresh.svg';
import mailIcon from '../images/product/mail.svg';

import stripeIcon from '../images/product/stripe.svg';
import aes256Icon from '../images/product/aes256.svg';
import paypalIcon from '../images/product/paypal.svg';
import visaIcon from '../images/product/visa.svg';
import mastercardIcon from '../images/product/mastercard.svg';
import discoverIcon from '../images/product/discover.svg';
import americanExpressIcon from '../images/product/american-express.svg';

export const PAYMENT_FAQ = [
  { id: '1', name: 'Truck', text: 'Shipping & Delivery', imgPath: truckIcon },
  { id: '2', name: 'Refresh', text: 'Returns & Exchanges', imgPath: refreshIcon },
  { id: '3', name: 'Mail', text: 'Ask a question', imgPath: mailIcon },
];

export const PAYMENT_SYSTEMS = [
  { id: '1', name: 'Stripe', imgPath: stripeIcon },
  { id: '2', name: 'AES256', imgPath: aes256Icon },
  { id: '3', name: 'PayPal', imgPath: paypalIcon },
  { id: '4', name: 'Visa', imgPath: visaIcon },
  { id: '5', name: 'Mastercard', imgPath: mastercardIcon },
  { id: '6', name: 'Discover', imgPath: discoverIcon },
  { id: '7', name: 'American Express', imgPath: americanExpressIcon },
];
