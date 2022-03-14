import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BurgerBtn from '../../../burger-btn';

import { setShoppingCartOpen } from '../../../../store/state/shopping-cart/actions';

import { shoppingCartSelector } from '../../../../selectors';

import Search from '../../../../images/header/search.svg';
import Globe from '../../../../images/header/globe.svg';
import User from '../../../../images/header/user.svg';
import ShoppingBag from '../../../../images/header/shopping-bag.svg';

import styles from './side-panel.module.scss';

const SidePanel = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(shoppingCartSelector);

  const handleCartOpen = () => dispatch(setShoppingCartOpen(true));

  return (
    <div className={styles.container}>
      <button type='button'>
        <img src={Search} alt='SearchIcon' />
      </button>
      <button type='button'>
        <img src={Globe} alt='GlobeIcon' />
      </button>
      <button type='button'>
        <img src={User} alt='UserIcon' />
      </button>
      <button type='button' className={styles.shoppingCartBtn} onClick={handleCartOpen} data-test-id='cart-button'>
        <img src={ShoppingBag} alt='ShoppingBagIcon' />
        {items.length > 0 && <span className={styles.cartItems}>{items.length}</span>}
      </button>
      <BurgerBtn />
    </div>
  );
};

export default SidePanel;
