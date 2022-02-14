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

import relatedProduct1 from '../images/product/related-product-1.png';
import relatedProduct2 from '../images/product/related-product-2.png';
import relatedProduct3 from '../images/product/related-product-3.png';
import relatedProduct4 from '../images/product/related-product-4.png';

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

export const REVIEWS = [
  {
    id: '1',
    author: 'Oleh Chabanov',
    text: 'On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment',
    rating: '5',
  },
  {
    id: '2',
    author: 'ShAmAn design',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti',
    rating: '5',
  },
];

export const RELATED_PRODUCTS = [
  {
    id: '1',
    name: 'related-product-1',
    title: `Women's tracksuit Q109`,
    price: '30',
    rating: '4',
    imgPath: relatedProduct1,
  },
  {
    id: '2',
    name: 'related-product-2',
    title: `Women's tracksuit Q109`,
    price: '30',
    rating: '4',
    imgPath: relatedProduct2,
  },
  {
    id: '3',
    name: 'related-product-3',
    title: `Women's tracksuit Q109`,
    price: '30',
    rating: '4',
    imgPath: relatedProduct3,
  },
  {
    id: '4',
    name: 'related-product-4',
    title: `Women's tracksuit Q109`,
    price: '30',
    rating: '4',
    imgPath: relatedProduct4,
  },
];
