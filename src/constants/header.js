import ROUTES from './routes';

import facebookIcon from '../images/header/facebook.svg';
import twitterIcon from '../images/header/twitter.svg';
import instagramIcon from '../images/header/instagram.svg';
import pinterestIcon from '../images/header/pinterest.svg';

export const SOCIAL_NETWORKS = [
  { id: '1', name: 'Facebook', path: facebookIcon, link: 'https://www.facebook.com/' },
  { id: '2', name: 'Twitter', path: twitterIcon, link: 'https://twitter.com/' },
  { id: '3', name: 'Instagram', path: instagramIcon, link: 'https://www.instagram.com/' },
  { id: '4', name: 'Pinterest', path: pinterestIcon, link: 'https://www.pinterest.com/' },
];

export const MENU = [
  { id: '1', path: ROUTES.aboutUs, name: 'About Us' },
  { id: '2', path: ROUTES.women, name: 'Women' },
  { id: '3', path: ROUTES.men, name: 'Men' },
  { id: '4', path: ROUTES.beauty, name: 'Beauty' },
  { id: '5', path: ROUTES.accessories, name: 'Accessories' },
  { id: '6', path: ROUTES.blog, name: 'Blog' },
  { id: '7', path: ROUTES.contact, name: 'Contact' },
];
