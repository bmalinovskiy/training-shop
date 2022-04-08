import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

import { shoppingCartSelector } from '../../selectors';

import useOnClickOutside from '../../hooks/on-click-outside';

import {
  changeQuantity,
  getCitiesRequest,
  getCountriesRequest,
  makeOrderRequest,
  removeAllItems,
  removeItemFromCart,
  setShoppingCartOpen,
} from '../../store/state/shopping-cart/actions';

import { DELIVERY_METHODS, PAYMENT_METHODS } from '../../constants/shopping-cart';

import { selectStyles } from '../../constants/select-styles';

import { normalizeCardNumber, normalizeCardDate, normalizePostcode, normalizePhoneNumber } from '../../utils/masks';

import closeIcon from '../../images/shopping-cart/close.svg';
import trashIcon from '../../images/shopping-cart/trash.svg';
import minusIcon from '../../images/shopping-cart/minus.svg';
import plusIcon from '../../images/shopping-cart/plus.svg';
import eyeSlashIcon from '../../images/shopping-cart/eye-slash.svg';

import styles from './shopping-cart.module.scss';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const { isShoppingCartOpen, items, countries, cities, message } = useSelector(shoppingCartSelector);

  const [activeTab, setActiveTab] = useState(null);

  const [orderStatus, setOrderStatus] = useState(null);

  const [deliveryMethod, setDeliveryMethod] = useState(DELIVERY_METHODS[0].text);
  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHODS[1].name);

  const [activeCountry, setActiveCountry] = useState(null);
  const [search, setSearch] = useState('');

  const [isInputVisible, setInputVisible] = useState(false);

  const {
    register: deliveryFormRegister,
    setValue: setDeliveryFormValue,
    control,
    getValues: getDeliveryFormValues,
    reset: deliveryFormReset,
    formState: { errors: deliveryFormErrors },
    handleSubmit: handleDeliveryFormSubmit,
  } = useForm({ mode: 'onBlur' });

  const {
    register: paymentFormRegister,
    setValue: setPaymentFormValue,
    getValues: getPaymentFormValues,
    reset: paymentFormReset,
    formState: { errors: paymentFormErrors },
    handleSubmit: handlePaymentFormSubmit,
  } = useForm({ mode: 'onBlur' });

  const countryOptions = countries.map((value) => ({ value, label: value }));
  const cityOptions = search.length >= 3 ? cities.map((value) => ({ value, label: value })) : [];

  const shoppingCartClass = classNames({ [styles.container]: true, [styles.open]: isShoppingCartOpen });

  const totalPrice = items.reduce((total, { quantity, price }) => total + quantity * price, 0).toFixed(2);

  const cartButtonText =
    !items.length || orderStatus === 'success'
      ? 'BACK TO SHOPPING'
      : orderStatus && orderStatus !== 'success'
      ? 'BACK TO PAYMENT'
      : activeTab === 3 && paymentMethod === 'Cash'
      ? 'READY'
      : activeTab === 3 && paymentMethod !== 'Cash'
      ? 'CHECK OUT'
      : 'FURTHER';

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
        break;
      case 3:
        handlePaymentFormSubmit(onPaymentFormSubmit)();
        break;
      default:
        if (orderStatus === 'success') {
          dispatch(setShoppingCartOpen({ isShoppingCartOpen: false }));
        } else {
          setOrderStatus(null);
          setActiveTab(3);
        }
    }
  };

  const handleCartClose = () => {
    dispatch(setShoppingCartOpen({ isShoppingCartOpen: false }));
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

  useEffect(() => {
    if (items.length) {
      setActiveTab(1);
    } else setActiveTab(null);
  }, [items.length, isShoppingCartOpen]);

  useEffect(() => {
    if (!isShoppingCartOpen) {
      deliveryFormReset();
      paymentFormReset();
      setActiveTab(null);
      setOrderStatus(null);
      setPaymentMethod(PAYMENT_METHODS[1].name);
      setDeliveryMethod(DELIVERY_METHODS[0].text);
    }
  }, [deliveryFormReset, isShoppingCartOpen, paymentFormReset]);

  useEffect(() => {
    if (!countries.length && deliveryMethod === DELIVERY_METHODS[2].text) {
      dispatch(getCountriesRequest());
    }
  }, [countries.length, deliveryMethod, dispatch]);

  useEffect(() => {
    if (search.length === 3) {
      dispatch(
        getCitiesRequest({
          searchValue: { city: search, country: activeCountry },
        })
      );
    }
  }, [cities.length, activeCountry, dispatch, search]);

  useEffect(() => {
    if (message) {
      setOrderStatus(message);
      setActiveTab(null);
    }
  }, [message]);

  useEffect(() => {
    if (orderStatus === 'success') {
      dispatch(removeAllItems());
    }
  }, [dispatch, orderStatus]);

  return (
    <div className={shoppingCartClass} ref={ref} data-test-id='cart'>
      <div className={styles.header}>
        <span>SHOPPING CART</span>
        <button type='button' onClick={handleCartClose}>
          <img src={closeIcon} alt='Close' />
        </button>
      </div>
      {!items.length && !orderStatus && (
        <div className={styles.empty}>
          <h1>Sorry, your cart is empty</h1>
        </div>
      )}
      {orderStatus === 'success' && (
        <div className={styles.orderSuccess}>
          <h1>Thank you for your order</h1>
          <span>Information about your order will appear in your e-mail.</span>
          <span>Our manager will call you back.</span>
        </div>
      )}
      {orderStatus && orderStatus !== 'success' && (
        <div className={styles.orderFailure}>
          <h1>Sorry, your payment has not been processed.</h1>
          <span>{message}</span>
        </div>
      )}
      {!!items.length && (
        <>
          {!orderStatus && (
            <div className={styles.tabNames}>
              <span className={classNames({ [styles.tabName]: true, [styles.active]: activeTab === 1 })}>
                Item in Cart
              </span>
              &frasl;
              <span className={classNames({ [styles.tabName]: true, [styles.active]: activeTab === 2 })}>
                Delivery Info
              </span>
              &frasl;
              <span className={classNames({ [styles.tabName]: true, [styles.active]: activeTab === 3 })}>Payment</span>
            </div>
          )}
          {activeTab === 1 && (
            <div className={styles.itemsTab}>
              {items.map(({ id, name, quantity, price, color, size, imgUrl }) => (
                <div key={id} style={{ marginRight: '12px' }}>
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
                {DELIVERY_METHODS.map(({ id, text }) => (
                  <React.Fragment key={id}>
                    <hr />
                    <div className={styles.deliveryMethodItem}>
                      <input
                        type='radio'
                        name='delivery-method'
                        id={id}
                        value={text}
                        checked={deliveryMethod === text}
                        onChange={({ target: { value } }) => setDeliveryMethod(value)}
                      />
                      <label htmlFor={id}>{text}</label>
                    </div>
                  </React.Fragment>
                ))}
                <hr style={{ marginBottom: '24px' }} />
                <label htmlFor='phone' className={styles.sectionLabel}>
                  PHONE
                </label>
                <input
                  {...deliveryFormRegister('phone', {
                    required: 'Поле должно быть заполнено',
                    minLength: {
                      value: 17,
                      message: 'Введите корректный номер телефона',
                    },
                  })}
                  type='tel'
                  id='phone'
                  placeholder='+375 ( _ _ ) _ _ _ _ _ _ _'
                  maxLength='17'
                  onChange={({ target: { value } }) => setDeliveryFormValue('phone', normalizePhoneNumber(value))}
                  onFocus={({ target: { value } }) => (!value ? setDeliveryFormValue('phone', '+375 (') : value)}
                  className={deliveryFormErrors?.phone ? styles.inputError : null}
                />
                <div className={styles.errorMessage}>
                  {deliveryFormErrors?.phone && <span>{deliveryFormErrors?.phone?.message}</span>}
                </div>
                <label htmlFor='email' className={styles.sectionLabel}>
                  E-MAIL
                </label>
                <input
                  {...deliveryFormRegister('email', {
                    required: 'Поле должно быть заполнено',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Введите корректный email',
                    },
                  })}
                  type='email'
                  id='email'
                  placeholder='e-mail'
                  className={deliveryFormErrors?.email ? styles.inputError : null}
                />
                <div className={styles.errorMessage}>
                  {deliveryFormErrors?.email && <span>{deliveryFormErrors?.email?.message}</span>}
                </div>
                {deliveryMethod !== DELIVERY_METHODS[2].text && (
                  <>
                    <label htmlFor='country' className={styles.sectionLabel}>
                      ADDRESS
                    </label>
                    <input
                      {...deliveryFormRegister('country', { required: 'Поле должно быть заполнено' })}
                      type='text'
                      id='country'
                      autoComplete='country-name'
                      placeholder='Country'
                      className={deliveryFormErrors?.country ? styles.inputError : null}
                    />
                    <div className={styles.errorMessage}>
                      {deliveryFormErrors?.country && <span>{deliveryFormErrors?.country?.message}</span>}
                    </div>
                    <input
                      {...deliveryFormRegister('city', { required: 'Поле должно быть заполнено' })}
                      type='text'
                      placeholder='City'
                      className={deliveryFormErrors?.city ? styles.inputError : null}
                    />
                    <div className={styles.errorMessage}>
                      {deliveryFormErrors?.city && <span>{deliveryFormErrors?.city?.message}</span>}
                    </div>
                    <input
                      {...deliveryFormRegister('street', { required: 'Поле должно быть заполнено' })}
                      type='text'
                      autoComplete='street-address'
                      placeholder='Street'
                      className={deliveryFormErrors?.street ? styles.inputError : null}
                    />
                    <div className={styles.errorMessage}>
                      {deliveryFormErrors?.street && <span>{deliveryFormErrors?.street?.message}</span>}
                    </div>
                    <div className={styles.addressPart}>
                      <input
                        {...deliveryFormRegister('house', { required: 'Поле должно быть заполнено' })}
                        type='tel'
                        maxLength='2'
                        inputMode='numeric'
                        onChange={({ target: { value } }) => setDeliveryFormValue('house', value.replace(/[^\d]/g, ''))}
                        placeholder='House'
                        className={deliveryFormErrors?.house ? styles.inputError : null}
                      />
                      <input
                        {...deliveryFormRegister('apartment')}
                        type='tel'
                        maxLength='2'
                        onChange={({ target: { value } }) =>
                          setDeliveryFormValue('apartment', value.replace(/[^\d]/g, ''))
                        }
                        inputMode='numeric'
                        placeholder='Apartment'
                      />
                    </div>
                    <div className={styles.errorMessage}>
                      {deliveryFormErrors?.house && <span>{deliveryFormErrors?.house?.message}</span>}
                    </div>
                  </>
                )}
                {deliveryMethod === DELIVERY_METHODS[2].text && (
                  <>
                    <label className={styles.sectionLabel}>ADDRESS OF STORE</label>
                    <div
                      className={[
                        deliveryFormErrors?.storeCountry ? styles.inputError : null,
                        styles.customSelect,
                      ].join(' ')}
                    >
                      <Controller
                        control={control}
                        name='storeCountry'
                        rules={{ required: 'Поле должно быть заполнено' }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            placeholder='Country'
                            isSearchable
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 0,
                              colors: {
                                ...theme.colors,
                                primary: '#121212',
                              },
                            })}
                            maxMenuHeight={150}
                            menuPosition='fixed'
                            noOptionsMessage={() => 'Country not founded'}
                            styles={selectStyles}
                            options={countryOptions}
                            value={countryOptions.find(({ value }) => value === field.value)}
                            onChange={({ value }) => {
                              field.onChange(value);
                              setActiveCountry(value);
                            }}
                          />
                        )}
                      />
                    </div>
                    <div className={styles.errorMessage}>
                      {deliveryFormErrors?.storeCountry && <span>{deliveryFormErrors?.storeCountry?.message}</span>}
                    </div>
                    <div
                      className={[
                        deliveryFormErrors?.storeAddress ? styles.inputError : null,
                        styles.customSelect,
                      ].join(' ')}
                    >
                      <Controller
                        control={control}
                        name='storeAddress'
                        rules={{ required: 'Поле должно быть заполнено' }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            placeholder='Store address'
                            isSearchable
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 0,
                              colors: {
                                ...theme.colors,
                                primary: '#121212',
                              },
                            })}
                            maxMenuHeight={150}
                            menuPosition='fixed'
                            noOptionsMessage={() => 'Store address not founded'}
                            styles={selectStyles}
                            options={cityOptions}
                            value={cityOptions.find(({ value }) => value === field.value)}
                            onChange={({ value }) => field.onChange(value)}
                            onInputChange={(value) => setSearch(value)}
                          />
                        )}
                      />
                    </div>
                    <div className={styles.errorMessage}>
                      {deliveryFormErrors?.storeAddress && <span>{deliveryFormErrors?.storeAddress?.message}</span>}
                    </div>
                  </>
                )}
                {deliveryMethod === DELIVERY_METHODS[0].text && (
                  <>
                    <label htmlFor='postcode' className={styles.sectionLabel}>
                      POSTCODE
                    </label>
                    <input
                      {...deliveryFormRegister('postcode', {
                        required: 'Поле должно быть заполнено',
                        minLength: { value: 9, message: 'Почтовый индекс должен состоять из 6 цифр' },
                      })}
                      type='tel'
                      inputMode='numeric'
                      maxLength='9'
                      autoComplete='postal-code'
                      onChange={({ target: { value } }) => setDeliveryFormValue('postcode', normalizePostcode(value))}
                      onFocus={({ target: { value } }) => (!value ? setDeliveryFormValue('postcode', 'BY ') : value)}
                      id='postcode'
                      placeholder='BY _ _ _ _ _ _'
                      className={deliveryFormErrors?.postcode ? styles.inputError : null}
                    />
                    <div className={styles.errorMessage}>
                      {deliveryFormErrors?.postcode && <span>{deliveryFormErrors?.postcode?.message}</span>}
                    </div>
                  </>
                )}
                <div className={styles.agreement}>
                  <input
                    {...deliveryFormRegister('agreement', {
                      required: 'Вы должны согласиться на обработку личной информации',
                    })}
                    id='agreement'
                    type='checkbox'
                    className={deliveryFormErrors?.agreement ? styles.inputError : null}
                  />
                  <label htmlFor='agreement'>I agree to the processing of my personal information</label>
                </div>
                <div className={styles.errorMessage}>
                  {deliveryFormErrors?.agreement && <span>{deliveryFormErrors?.agreement?.message}</span>}
                </div>
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
                    <label htmlFor='card'>CARD</label>
                    <input
                      {...paymentFormRegister('card', {
                        required: 'Поле должно быть заполнено',
                        minLength: { value: 19, message: 'Номер карты должен состоять из 16 цифр' },
                      })}
                      placeholder='_ _ _ _  _ _ _ _  _ _ _ _  _ _ _ _'
                      type='tel'
                      id='card'
                      inputMode='numeric'
                      autoComplete='cc-number'
                      onChange={({ target: { value } }) => setPaymentFormValue('card', normalizeCardNumber(value))}
                      className={paymentFormErrors?.card ? styles.inputError : null}
                    />
                    <div className={styles.errorMessage}>
                      {paymentFormErrors?.card && <span>{paymentFormErrors?.card?.message}</span>}
                    </div>
                    <div className={styles.cardPart}>
                      <div className={styles.cardDate}>
                        <input
                          {...paymentFormRegister('cardDate', {
                            required: 'Поле должно быть заполнено',
                            minLength: { value: 5, message: 'Срок действия должен состоять из 4 цифр' },
                          })}
                          placeholder='YY/MM'
                          type='tel'
                          inputMode='numeric'
                          autoComplete='cc-exp'
                          onChange={({ target: { value } }) =>
                            setPaymentFormValue('cardDate', normalizeCardDate(value))
                          }
                          className={paymentFormErrors?.cardDate ? styles.inputError : null}
                        />
                        <div className={styles.errorMessage}>
                          {paymentFormErrors?.cardDate && <span>{paymentFormErrors?.cardDate?.message}</span>}
                        </div>
                      </div>
                      <div className={styles.cardCVV}>
                        <div>
                          <input
                            {...paymentFormRegister('cardCVV', {
                              required: 'Поле должно быть заполнено',
                              minLength: { value: 3, message: 'CVV код должен состоять из 3 цифр' },
                            })}
                            placeholder='CVV'
                            maxLength='3'
                            type={isInputVisible ? 'text' : 'password'}
                            inputMode='numeric'
                            autoComplete='cc-scs'
                            className={classNames({ [styles.cvvError]: paymentFormErrors?.cardCVV })}
                          />
                          <button
                            type='button'
                            onClick={() => setInputVisible(!isInputVisible)}
                            className={classNames({
                              [styles.cvvError]: paymentFormErrors?.cardCVV,
                              [styles.visible]: isInputVisible,
                            })}
                          >
                            <img src={eyeSlashIcon} alt='See code' />
                          </button>
                        </div>
                        <div className={styles.errorMessage}>
                          {paymentFormErrors?.cardCVV && <span>{paymentFormErrors?.cardCVV?.message}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {paymentMethod === PAYMENT_METHODS[0].name && (
                  <div className={styles.payPalPayment}>
                    <label htmlFor='cashEmail'>E-MAIL</label>
                    <input
                      {...paymentFormRegister('cashEmail', {
                        required: 'Поле должно быть заполнено',
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: 'Введите корректный email',
                        },
                      })}
                      type='email'
                      id='cashEmail'
                      placeholder='e-mail'
                      className={paymentFormErrors?.cashEmail ? styles.inputError : null}
                    />
                    <div className={styles.errorMessage}>
                      {paymentFormErrors?.cashEmail && <span>{paymentFormErrors?.cashEmail?.message}</span>}
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </>
      )}
      <div className={styles.footer}>
        {!!items.length && !orderStatus && (
          <div className={styles.totalPrice}>
            <span className={styles.text}>Total</span>
            <span className={styles.price}>{`$${totalPrice}`}</span>
          </div>
        )}
        <button type='button' onClick={handleCartAction} className={styles.cartAction}>
          {cartButtonText}
        </button>
        {activeTab !== 1 && orderStatus !== 'success' && (
          <button type='button' className={styles.viewCartBtn} onClick={() => setActiveTab(1)}>
            VIEW CART
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
