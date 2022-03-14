import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import { shoppingCartSelector } from '../../selectors';

import useOnClickOutside from '../../hooks/on-click-outside';

import { changeQuantity, removeItemFromCart, setShoppingCartOpen } from '../../store/state/shopping-cart/actions';

import closeIcon from '../../images/shopping-cart/close.svg';
import trashIcon from '../../images/shopping-cart/trash.svg';
import minusIcon from '../../images/shopping-cart/minus.svg';
import plusIcon from '../../images/shopping-cart/plus.svg';

import styles from './shopping-cart.module.scss';

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const { isShoppingCartOpen, items } = useSelector(shoppingCartSelector);

  const ShoppingCartClass = classNames({ [styles.container]: true, [styles.open]: isShoppingCartOpen });

  const node = useRef();
  useOnClickOutside(node, () => {
    if (isShoppingCartOpen) {
      dispatch(setShoppingCartOpen(false));
    }
  });

  const totalPrice = items.reduce((total, { quantity, price }) => total + quantity * price, 0).toFixed(2);

  const handleCartClose = () => {
    dispatch(setShoppingCartOpen(false));
  };

  const handleNextStep = () => {
    if (!items.length) {
      dispatch(setShoppingCartOpen(false));
    }
  };

  const handleRemoveItem = (id) => dispatch(removeItemFromCart(id));

  useEffect(() => {
    if (isShoppingCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isShoppingCartOpen]);

  return (
    <div className={ShoppingCartClass} ref={node}>
      <div className={styles.header}>
        <span>SHOPPING CART</span>
        <button type='button' onClick={handleCartClose}>
          <img src={closeIcon} alt='Close' />
        </button>
      </div>
      {items.length === 0 && (
        <div className={styles.empty}>
          <span>Sorry,</span>
          <span>your cart</span>
          <span>is empty</span>
        </div>
      )}
      {items.length > 0 && (
        <div className={styles.orderStages}>
          <button type='button' className={[styles.item, styles.active].join(' ')}>
            Item in Cart
          </button>
          &frasl;
          <button type='button' className={styles.item}>
            Delivery Info
          </button>
          &frasl;
          <button type='button' className={styles.item}>
            Payment
          </button>
        </div>
      )}
      {items.length > 0 && (
        <div className={styles.items}>
          {items.map(({ id, name, quantity, price, color, size, imgUrl }) => (
            <div key={id}>
              <div className={styles.item}>
                <img src={`https://training.cleverland.by/shop${imgUrl}`} alt={name} />
                <div className={styles.details}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.features}>{`${color}, ${size}`}</span>
                  <div className={styles.itemActions}>
                    <div className={styles.number}>
                      <button
                        type='button'
                        className={styles.minus}
                        onClick={() => dispatch(changeQuantity({ id, value: quantity - 1 }))}
                      >
                        <img src={minusIcon} alt='Minus' />
                      </button>
                      <input
                        type='text'
                        value={quantity}
                        onChange={({ target: { value } }) => dispatch(changeQuantity({ id, value: Number(value) }))}
                      />
                      <button
                        type='button'
                        className={styles.plus}
                        onClick={() => dispatch(changeQuantity({ id, value: quantity + 1 }))}
                      >
                        <img src={plusIcon} alt='Plus' />
                      </button>
                    </div>
                    <span className={styles.price}>{`$${(price * quantity).toFixed(2)}`}</span>
                    <button type='button' className={styles.trash} onClick={() => handleRemoveItem(id)}>
                      <img src={trashIcon} alt='Delete item' />
                    </button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}
      <div className={styles.footer}>
        {items.length > 0 && (
          <div className={styles.totalPrice}>
            <span className={styles.text}>Total</span>
            <span className={styles.price}>{`$${totalPrice}`}</span>
          </div>
        )}
        <button type='button' className={styles.nextStepBtn} onClick={handleNextStep}>
          {items.length ? 'FURTHER' : 'BACK TO SHOPPING'}
        </button>
        {items.length > 0 && (
          <button type='button' className={styles.viewCartBtn} onClick={handleCartClose}>
            VIEW CART
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
