import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';
import { FormProvider, useForm } from 'react-hook-form';

import ItemsTab from './items-tab';
import DeliveryTab from './delivery-tab';
import PaymentTab from './payment-tab';

import { shoppingCartSelector } from '../../selectors';

import useOnClickOutside from '../../hooks/on-click-outside';

import {
  clearOrderMessage,
  makeOrderRequest,
  removeAllItems,
  setShoppingCartOpen,
  setDeliveryMethod,
  setPaymentMethod,
} from '../../store/state/shopping-cart/actions';

import { DELIVERY_METHODS, PAYMENT_METHODS, ORDER_SUCCESS, ORDER_ERROR } from '../../constants/shopping-cart';

import closeIcon from '../../images/shopping-cart/close.svg';

import styles from './shopping-cart.module.scss';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const { isShoppingCartOpen, items, message, error, deliveryMethod, paymentMethod } =
    useSelector(shoppingCartSelector);

  const [activeTab, setActiveTab] = useState(null);

  const [orderStatus, setOrderStatus] = useState(null);

  const {
    register: deliveryFormRegister,
    setValue: setDeliveryFormValue,
    control,
    getValues: getDeliveryFormValues,
    reset: resetDeliveryForm,
    resetField,
    formState: { errors: deliveryFormErrors, isValid },
    handleSubmit: handleDeliveryFormSubmit,
  } = useForm({ mode: 'onTouched' });

  const {
    register: paymentFormRegister,
    setValue: setPaymentFormValue,
    getValues: getPaymentFormValues,
    reset: resetPaymentForm,
    formState: { errors: paymentFormErrors },
    handleSubmit: handlePaymentFormSubmit,
  } = useForm({ mode: 'onTouched' });

  const shoppingCartClass = classNames(styles.container, { [styles.open]: isShoppingCartOpen });

  const totalPrice = items.reduce((total, { quantity, price }) => total + quantity * price, 0).toFixed(2);

  const cartButtonText = new Map([
    [!items.length || orderStatus === ORDER_SUCCESS, 'BACK TO SHOPPING'],
    [orderStatus && orderStatus !== ORDER_SUCCESS, 'BACK TO PAYMENT'],
    [activeTab === 3 && paymentMethod === 'Cash', 'READY'],
    [activeTab === 3 && paymentMethod !== 'Cash', 'CHECK OUT'],
    [activeTab === 1 || activeTab === 2, 'FURTHER'],
  ]);

  const onDeliveryFormSubmit = () => {
    setActiveTab(3);
  };

  const onPaymentFormSubmit = () => {
    const { phone, email, country, city, street, house, apartment, postcode, storeAddress } = getDeliveryFormValues();
    const { card, cardDate, cardCVV, cashEmail } = getPaymentFormValues();

    dispatch(
      makeOrderRequest({
        order: {
          products: items.map(({ name, size, color, quantity }) => ({ name, size, color, quantity })),
          deliveryMethod,
          paymentMethod,
          totalPrice,
          phone,
          email,
          country,
          cashEmail,
          city,
          street,
          house,
          apartment,
          postcode,
          storeAddress,
          card,
          cardDate,
          cardCVV,
        },
      })
    );
  };

  const handleCartAction = () => {
    switch (activeTab) {
      case 1:
        setActiveTab(2);
        break;
      case 2:
        handleDeliveryFormSubmit(onDeliveryFormSubmit)();
        if (!isValid) {
          resetField('agreement');
        }
        break;
      case 3:
        handlePaymentFormSubmit(onPaymentFormSubmit)();
        break;
      default:
        if (!orderStatus || orderStatus === ORDER_SUCCESS) {
          dispatch(setShoppingCartOpen({ isShoppingCartOpen: false }));
        } else {
          setOrderStatus(null);
          setActiveTab(3);
        }
    }
  };

  const handleViewCart = () => {
    if (activeTab) {
      setActiveTab((prev) => prev - 1);
    } else {
      setActiveTab(1);
      setOrderStatus(null);
      resetDeliveryForm();
      resetPaymentForm();
    }
  };

  const handleCartClose = () => {
    dispatch(setShoppingCartOpen({ isShoppingCartOpen: false }));
  };

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

  useEffect(() => {
    if (items.length) {
      setActiveTab(1);
    } else setActiveTab(null);
  }, [items.length, isShoppingCartOpen]);

  useEffect(() => {
    if (deliveryMethod !== DELIVERY_METHODS[0].text) {
      resetDeliveryForm({ postcode: '' });
    }
    if (deliveryMethod === DELIVERY_METHODS[2].text) {
      resetDeliveryForm({ country: '', city: '', street: '', house: '', apartment: '' });
    } else {
      resetDeliveryForm({ storeCountry: '', storeAddress: '' });
    }
  }, [deliveryMethod, resetDeliveryForm]);

  useEffect(() => {
    if (paymentMethod !== PAYMENT_METHODS[0].name) {
      resetPaymentForm({ cashEmail: '' });
    }
    if (paymentMethod !== PAYMENT_METHODS[1].name && paymentMethod !== PAYMENT_METHODS[2].name) {
      resetPaymentForm({ card: '', cardDate: '', cardCVV: '' });
    }
  }, [paymentMethod, resetPaymentForm]);

  useEffect(() => {
    if (!isShoppingCartOpen) {
      resetDeliveryForm();
      resetPaymentForm();
      setActiveTab(null);
      setOrderStatus(null);
      dispatch(clearOrderMessage());
      dispatch(setPaymentMethod({ paymentMethod: PAYMENT_METHODS[1].name }));
      dispatch(setDeliveryMethod({ deliveryMethod: DELIVERY_METHODS[0].text }));
    }
  }, [resetDeliveryForm, isShoppingCartOpen, resetPaymentForm, dispatch]);

  useEffect(() => {
    if (message && isShoppingCartOpen) {
      setOrderStatus(message);
      setActiveTab(null);
    }
  }, [isShoppingCartOpen, message]);

  useEffect(() => {
    if (error) {
      setOrderStatus(ORDER_ERROR);
      setActiveTab(null);
    }
  }, [error]);

  useEffect(() => {
    if (orderStatus === ORDER_SUCCESS) {
      dispatch(removeAllItems());
    }
  }, [dispatch, orderStatus]);

  return (
    <div className={shoppingCartClass} ref={ref} data-test-id='cart'>
      <div className={styles.header}>
        <h4>SHOPPING CART</h4>
        <button type='button' onClick={handleCartClose}>
          <img src={closeIcon} alt='Close' />
        </button>
      </div>
      {!items.length && !orderStatus && (
        <div className={styles.empty}>
          <h1>Sorry, your cart is empty</h1>
        </div>
      )}
      {orderStatus === ORDER_SUCCESS && (
        <div className={styles.orderSuccess}>
          <h1>Thank you for your order</h1>
          <span>Information about your order will appear in your e-mail.</span>
          <span>Our manager will call you back.</span>
        </div>
      )}
      {orderStatus && orderStatus !== ORDER_SUCCESS && (
        <div className={styles.orderFailure}>
          <h1>Sorry, your payment has not been processed.</h1>
          <span>{message || ORDER_ERROR}</span>
        </div>
      )}
      {!!items.length && (
        <>
          {!orderStatus && (
            <div className={styles.tabNames}>
              <span className={classNames(styles.tabName, { [styles.active]: activeTab === 1 })}>Item in Cart</span>
              &frasl;
              <span className={classNames(styles.tabName, { [styles.active]: activeTab === 2 })}>Delivery Info</span>
              &frasl;
              <span className={classNames(styles.tabName, { [styles.active]: activeTab === 3 })}>Payment</span>
            </div>
          )}
          {activeTab === 1 && <ItemsTab />}
          {activeTab === 2 && (
            <FormProvider
              register={deliveryFormRegister}
              control={control}
              errors={deliveryFormErrors}
              setValue={setDeliveryFormValue}
              getValues={getDeliveryFormValues}
            >
              <DeliveryTab />
            </FormProvider>
          )}
          {activeTab === 3 && (
            <FormProvider register={paymentFormRegister} errors={paymentFormErrors} setValue={setPaymentFormValue}>
              <PaymentTab />
            </FormProvider>
          )}
        </>
      )}
      <div className={styles.footer}>
        {!!items.length && !orderStatus && (
          <div className={styles.totalPrice}>
            <span>Total</span>
            <h4>{`$${totalPrice}`}</h4>
          </div>
        )}
        <button type='submit' onClick={handleCartAction} className={styles.cartAction}>
          {cartButtonText.get(true)}
        </button>
        {activeTab !== 1 && orderStatus !== ORDER_SUCCESS && (
          <button type='button' className={styles.viewCartBtn} onClick={handleViewCart}>
            VIEW CART
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
