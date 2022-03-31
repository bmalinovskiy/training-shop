import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';
import { useForm } from 'react-hook-form';

import { shoppingCartSelector } from '../../selectors';

import useOnClickOutside from '../../hooks/on-click-outside';

import { changeQuantity, removeItemFromCart, setShoppingCartOpen } from '../../store/state/shopping-cart/actions';

import { PAYMENT_METHODS } from '../../constants/shopping-cart';

import closeIcon from '../../images/shopping-cart/close.svg';
import trashIcon from '../../images/shopping-cart/trash.svg';
import minusIcon from '../../images/shopping-cart/minus.svg';
import plusIcon from '../../images/shopping-cart/plus.svg';
import eyeSlashIcon from '../../images/shopping-cart/eye-slash.svg';

import styles from './shopping-cart.module.scss';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const { isShoppingCartOpen, items } = useSelector(shoppingCartSelector);

  const [activeTab, setActiveTab] = useState(1);

  const [deliveryMethod, setDeliveryMethod] = useState('delivery-method-1');
  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHODS[0].name);

  const { register, setValue } = useForm({ mode: 'onBlur' });

  const shoppingCartClass = classNames({ [styles.container]: true, [styles.open]: isShoppingCartOpen });

  const totalPrice = items.reduce((total, { quantity, price }) => total + quantity * price, 0).toFixed(2);

  const normalizeCardNumber = (value) =>
    value
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      ?.join(' ')
      .substring(0, 19) || '';

  const normalizeCardDate = (value) =>
    value
      .replace(/[/]/g, '')
      .match(/.{1,2}/g)
      ?.join('/')
      .substring(0, 5) || '';

  const tabBtnText = activeTab === 3 ? 'CHECK OUT' : 'FURTHER';

  const handleCartClose = () => {
    dispatch(setShoppingCartOpen({ isShoppingCartOpen: false }));
  };

  const handleSetTab = (tab) => {
    if (!items.length) {
      dispatch(setShoppingCartOpen({ isShoppingCartOpen: false }));
    } else if (tabBtnText === 'FURTHER') {
      setActiveTab(tab);
    }
  };

  const handleRemoveItem = (id) => dispatch(removeItemFromCart({ id }));

  useOnClickOutside(ref, () => {
    if (isShoppingCartOpen) {
      dispatch(setShoppingCartOpen({ isShoppingCartOpen: false }));
    }
  });

  useEffect(() => {
    if (isShoppingCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isShoppingCartOpen]);

  return (
    <div className={shoppingCartClass} ref={ref} data-test-id='cart'>
      <div className={styles.header}>
        <span>SHOPPING CART</span>
        <button type='button' onClick={handleCartClose}>
          <img src={closeIcon} alt='Close' />
        </button>
      </div>
      {!items.length && (
        <div className={styles.empty}>
          <span>Sorry,</span>
          <span>your cart</span>
          <span>is empty</span>
        </div>
      )}
      {!!items.length && (
        <>
          <div className={styles.tabs}>
            <button
              type='button'
              onClick={() => setActiveTab(1)}
              className={classNames({ [styles.tab]: true, [styles.active]: activeTab === 1 })}
            >
              Item in Cart
            </button>
            &frasl;
            <button
              type='button'
              onClick={() => setActiveTab(2)}
              className={classNames({ [styles.tab]: true, [styles.active]: activeTab === 2 })}
            >
              Delivery Info
            </button>
            &frasl;
            <button
              type='button'
              onClick={() => setActiveTab(3)}
              className={classNames({ [styles.tab]: true, [styles.active]: activeTab === 3 })}
            >
              Payment
            </button>
          </div>
          {activeTab === 1 && (
            <div className={styles.itemsTab}>
              {items.map(({ id, name, quantity, price, color, size, imgUrl }) => (
                <div key={id}>
                  <div className={styles.item} data-test-id='cart-card'>
                    <img src={`https://training.cleverland.by/shop${imgUrl}`} alt={name} className={styles.itemImg} />
                    <div className={styles.details}>
                      <span className={styles.name}>{name}</span>
                      <span className={styles.features}>{`${color}, ${size}`}</span>
                      <div className={styles.itemActions}>
                        <div className={styles.number}>
                          <button
                            type='button'
                            className={styles.minus}
                            onClick={() => dispatch(changeQuantity({ id, value: quantity - 1 }))}
                            data-test-id='minus-product'
                          >
                            <img src={minusIcon} alt='Minus' />
                          </button>
                          <input
                            type='text'
                            maxLength='2'
                            value={quantity}
                            onChange={({ target: { value } }) => dispatch(changeQuantity({ id, value: Number(value) }))}
                          />
                          <button
                            type='button'
                            className={styles.plus}
                            onClick={() => dispatch(changeQuantity({ id, value: quantity + 1 }))}
                            data-test-id='plus-product'
                          >
                            <img src={plusIcon} alt='Plus' />
                          </button>
                        </div>
                        <span className={styles.price}>{`$${(price * quantity).toFixed(2)}`}</span>
                        <button
                          type='button'
                          className={styles.trash}
                          onClick={() => handleRemoveItem(id)}
                          data-test-id='remove-product'
                        >
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
          {activeTab === 2 && (
            <div className={styles.deliveryInfoTab}>
              <span className={styles.title}>Choose the method of delivery of the items</span>
              <form>
                <hr />
                <label>
                  <input
                    type='radio'
                    name='delivery-method'
                    value='delivery-method-1'
                    checked={deliveryMethod === 'delivery-method-1'}
                    onChange={({ target: { value } }) => setDeliveryMethod(value)}
                  />
                  Pickup from post offices
                </label>
                <hr />
                <label>
                  <input
                    type='radio'
                    name='delivery-method'
                    value='delivery-method-2'
                    checked={deliveryMethod === 'delivery-method-2'}
                    onChange={({ target: { value } }) => setDeliveryMethod(value)}
                  />
                  Express delivery
                </label>
                <hr />
                <label>
                  <input
                    type='radio'
                    name='delivery-method'
                    value='delivery-method-3'
                    checked={deliveryMethod === 'delivery-method-3'}
                    onChange={({ target: { value } }) => setDeliveryMethod(value)}
                  />
                  Store pickup
                </label>
                <hr />
                <span>PHONE</span>
                <input type='tel' placeholder='+375 ( _ _ ) _ _ _ _ _ _ _' />
                <span>E-MAIL</span>
                <input type='email' placeholder='e-mail' />
                {deliveryMethod !== 'delivery-method-3' && (
                  <>
                    <span>ADRESS</span>
                    <input type='text' placeholder='Country' />
                    <input type='text' placeholder='City' />
                    <input type='text' placeholder='Street' />
                    <div>
                      <input type='text' placeholder='House' />
                      <input type='text' placeholder='Apartment' />
                    </div>
                  </>
                )}
                {deliveryMethod === 'delivery-method-3' && (
                  <>
                    <span>ADRESS OF STORE</span>
                    <input type='text' placeholder='Country' />
                    <input type='text' placeholder='Store adress' />
                  </>
                )}
                {deliveryMethod === 'delivery-method-1' && (
                  <>
                    <span>POSTCODE</span>
                    <input type='text' placeholder='BY _ _ _ _ _ _' />
                  </>
                )}
                <label className={styles.agreement}>
                  <input type='checkbox' />I agree to the processing of my personal information
                </label>
              </form>
            </div>
          )}
          {activeTab === 3 && (
            <div className={styles.paymentTab}>
              <span className={styles.title}>Method of payments</span>
              <form>
                <hr />
                {PAYMENT_METHODS.map(({ id, name, imgPath }) => (
                  <React.Fragment key={id}>
                    <div className={styles.paymentMethodItem}>
                      <input
                        type='radio'
                        name='payment-method'
                        id={id}
                        value={name}
                        checked={paymentMethod === name}
                        onChange={({ target: { value } }) => setPaymentMethod(value)}
                      />
                      <label htmlFor={id}>
                        <img src={imgPath} height='32px' alt={name} />
                      </label>
                    </div>
                    <hr />
                  </React.Fragment>
                ))}
                {(paymentMethod === PAYMENT_METHODS[1].name || paymentMethod === PAYMENT_METHODS[2].name) && (
                  <div className={styles.cardPayment}>
                    <label htmlFor='cardNumber'>CARD</label>
                    <input
                      {...register('cardNumber', {
                        required: 'Введите номер карты',
                        minLength: { value: 19, message: 'Номер карты должен состоять из 16 цифр' },
                      })}
                      placeholder='_ _ _ _  _ _ _ _  _ _ _ _  _ _ _ _'
                      type='tel'
                      id='cardNumber'
                      inputMode='numeric'
                      autoComplete='cc-number'
                      onChange={({ target: { value } }) => setValue('cardNumber', normalizeCardNumber(value))}
                    />
                    <div>
                      <input
                        {...register('cardDate', {
                          required: 'Введите срок действия карты',
                          minLength: { value: 5, message: 'Срок действия должен состоять из 4 цифр' },
                        })}
                        placeholder='YY/MM'
                        type='tel'
                        inputMode='numeric'
                        autoComplete='cc-exp'
                        onChange={({ target: { value } }) => setValue('cardDate', normalizeCardDate(value))}
                      />
                      <div>
                        <input
                          {...register('cardCVV', {
                            required: 'Введите CVV код',
                            minLength: { value: 3, message: 'CVV код должен состоять из 3 цифр' },
                          })}
                          placeholder='CVV'
                          maxLength='3'
                          type='tel'
                          inputMode='numeric'
                          autoComplete='cc-scs'
                        />
                        <button type='button'>
                          <img src={eyeSlashIcon} alt='See code' />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {paymentMethod === PAYMENT_METHODS[0].name && (
                  <div className={styles.payPalPayment}>
                    <label htmlFor='email'>E-MAIL</label>
                    <input type='email' id='email' placeholder='e-mail' />
                  </div>
                )}
              </form>
            </div>
          )}
        </>
      )}
      <div className={styles.footer}>
        {!!items.length && (
          <div className={styles.totalPrice}>
            <span className={styles.text}>Total</span>
            <span className={styles.price}>{`$${totalPrice}`}</span>
          </div>
        )}
        <button type='button' className={styles.setTabBtn} onClick={() => handleSetTab(activeTab + 1)}>
          {items.length ? tabBtnText : 'BACK TO SHOPPING'}
        </button>
        <button type='button' className={styles.viewCartBtn} onClick={handleCartClose}>
          VIEW CART
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
