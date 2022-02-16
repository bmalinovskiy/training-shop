import stripeIcon from '../images/footer/stripe.svg';
import aes256Icon from '../images/footer/aes256.svg';
import paypalIcon from '../images/footer/paypal.svg';
import visaIcon from '../images/footer/visa.svg';
import mastercardIcon from '../images/footer/mastercard.svg';
import discoverIcon from '../images/footer/discover.svg';
import americanExpressIcon from '../images/footer/american-express.svg';

import facebookIcon from '../images/footer/facebook.svg';
import twitterIcon from '../images/footer/twitter.svg';
import instagramIcon from '../images/footer/instagram.svg';
import pinterestIcon from '../images/footer/pinterest.svg';

export const SOCIAL_NETWORKS = [
  { id: '1', name: 'Facebook', path: facebookIcon, link: 'https://www.facebook.com/' },
  { id: '2', name: 'Twitter', path: twitterIcon, link: 'https://twitter.com/' },
  { id: '3', name: 'Instagram', path: instagramIcon, link: 'https://www.instagram.com/' },
  { id: '4', name: 'Pinterest', path: pinterestIcon, link: 'https://www.pinterest.com/' },
];

export const PAYMENT_ICONS = [
  { id: '1', name: 'Stripe', path: stripeIcon },
  { id: '2', name: 'AES256', path: aes256Icon },
  { id: '3', name: 'PayPal', path: paypalIcon },
  { id: '4', name: 'Visa', path: visaIcon },
  { id: '5', name: 'MasterCard', path: mastercardIcon },
  { id: '6', name: 'Discover', path: discoverIcon },
  { id: '7', name: 'American Express', path: americanExpressIcon },
];

export const CATEGORIES = [
  { id: '1', name: 'Men', path: '/men' },
  { id: '2', name: 'Women', path: '/women' },
  { id: '3', name: 'Accessories', path: '/accessories' },
  { id: '4', name: 'Beauty', path: '/beauty' },
];

export const INFORMATION = [
  { id: '1', name: 'About Us', path: '/about' },
  { id: '2', name: 'Contact Us', path: '/contact' },
  { id: '3', name: 'Blog', path: '/blog' },
  { id: '4', name: 'FAQs', path: '/faq' },
];

export const USEFUL_LINKS = [
  { id: '1', name: 'Terms & Conditions', path: '/#' },
  { id: '2', name: 'Returns & Exchanges', path: '/#' },
  { id: '3', name: 'Shipping & Delivery', path: '/#' },
  { id: '4', name: 'Privacy Policy', path: '/#' },
];
