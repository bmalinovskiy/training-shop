import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import Select from 'react-select';
import { Controller } from 'react-hook-form';

import ConnectForm from '../connect-form';

import { getCitiesRequest, getCountriesRequest, setDeliveryMethod } from '../../../store/state/shopping-cart/actions';

import { shoppingCartSelector } from '../../../selectors';

import { DELIVERY_METHODS } from '../../../constants/shopping-cart';
import { emailPattern, numbersPattern } from '../../../constants/patters';
import { selectStyles } from '../../../constants/select-styles';

import { normalizePostcode, normalizePhoneNumber } from '../../../utils/masks';

import styles from './delivery-tab.module.scss';

const DeliveryTab = () => {
  const dispatch = useDispatch();

  const { isShoppingCartOpen, countries, cities, deliveryMethod } = useSelector(shoppingCartSelector);

  const [countryOptions, setCountryOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  const [activeCountry, setActiveCountry] = useState(null);

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (countries.length) {
      setCountryOptions(countries.map((value) => ({ value, label: value })));
    }
  }, [countries]);

  useEffect(() => {
    if (cities.length) {
      setCityOptions(cities.map((value) => ({ value, label: value })));
    }
  }, [cities]);

  useEffect(() => {
    setCityOptions([]);
  }, [isShoppingCartOpen, activeCountry]);

  useEffect(() => {
    if (search.length === 3) {
      dispatch(
        getCitiesRequest({
          searchValue: { city: search, country: activeCountry },
        })
      );
    }
  }, [dispatch, cities.length, activeCountry, search]);

  useEffect(() => {
    if (!countries.length && deliveryMethod === DELIVERY_METHODS[2].text) {
      dispatch(getCountriesRequest());
    }
  }, [dispatch, countries.length, deliveryMethod]);

  return (
    <ConnectForm>
      {({ register, control, errors, setValue, getValues }) => (
        <div className={styles.deliveryInfoTab}>
          <span>Choose the method of delivery of the items</span>
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
                    onChange={({ target: { value } }) => dispatch(setDeliveryMethod({ deliveryMethod: value }))}
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
              {...register('phone', {
                required: 'Поле должно быть заполнено',
                minLength: {
                  value: 19,
                  message: 'Введите корректный номер телефона',
                },
              })}
              type='tel'
              id='phone'
              placeholder='+375 ( _ _ ) _ _ _ _ _ _ _'
              maxLength='19'
              onChange={({ target: { value } }) => setValue('phone', normalizePhoneNumber(value))}
              className={classNames({ [styles.inputError]: errors.phone })}
            />
            <div className={styles.errorMessage}>{errors?.phone && <span>{errors?.phone?.message}</span>}</div>
            <label htmlFor='email' className={styles.sectionLabel}>
              E-MAIL
            </label>
            <input
              {...register('email', {
                required: 'Поле должно быть заполнено',
                pattern: {
                  value: emailPattern,
                  message: 'Введите корректный email',
                },
              })}
              type='email'
              id='email'
              placeholder='e-mail'
              className={classNames({ [styles.inputError]: errors?.email })}
            />
            <div className={styles.errorMessage}>{errors?.email && <span>{errors?.email?.message}</span>}</div>
            {deliveryMethod !== DELIVERY_METHODS[2].text && (
              <>
                <label htmlFor='country' className={styles.sectionLabel}>
                  ADDRESS
                </label>
                <input
                  {...register('country', { required: 'Поле должно быть заполнено' })}
                  type='text'
                  id='country'
                  autoComplete='country-name'
                  placeholder='Country'
                  className={classNames({ [styles.inputError]: errors?.country })}
                />
                <div className={styles.errorMessage}>{errors?.country && <span>{errors?.country?.message}</span>}</div>
                <input
                  {...register('city', { required: 'Поле должно быть заполнено' })}
                  type='text'
                  placeholder='City'
                  className={classNames({ [styles.inputError]: errors?.city })}
                />
                <div className={styles.errorMessage}>{errors?.city && <span>{errors?.city?.message}</span>}</div>
                <input
                  {...register('street', { required: 'Поле должно быть заполнено' })}
                  type='text'
                  autoComplete='street-address'
                  placeholder='Street'
                  className={classNames({ [styles.inputError]: errors?.street })}
                />
                <div className={styles.errorMessage}>{errors?.street && <span>{errors?.street?.message}</span>}</div>
                <div className={styles.addressPart}>
                  <input
                    {...register('house', { required: 'Поле должно быть заполнено' })}
                    type='tel'
                    maxLength='2'
                    inputMode='numeric'
                    placeholder='House'
                    className={classNames({ [styles.inputError]: errors?.house })}
                  />
                  <input
                    {...register('apartment')}
                    type='tel'
                    maxLength='2'
                    onChange={({ target: { value } }) => setValue('apartment', value.replace(numbersPattern, ''))}
                    inputMode='numeric'
                    placeholder='Apartment'
                  />
                </div>
                <div className={styles.errorMessage}>{errors?.house && <span>{errors?.house?.message}</span>}</div>
              </>
            )}
            {deliveryMethod === DELIVERY_METHODS[2].text && (
              <>
                <label className={styles.sectionLabel}>ADDRESS OF STORE</label>
                <div
                  className={classNames(styles.customSelect, {
                    [styles.inputError]: errors?.storeCountry,
                  })}
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
                  {errors?.storeCountry && <span>{errors?.storeCountry?.message}</span>}
                </div>
                <div
                  className={classNames(styles.customSelect, {
                    [styles.inputError]: errors?.storeAddress,
                  })}
                >
                  <Controller
                    control={control}
                    name='storeAddress'
                    rules={{ required: 'Поле должно быть заполнено' }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        name='storeAddress'
                        placeholder='Store address'
                        isSearchable
                        isDisabled={!getValues('storeCountry')}
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
                        value={cityOptions.find(({ value }) => value === field.value) || null}
                        onChange={({ value }) => field.onChange(value)}
                        onInputChange={(value) => setSearch(value)}
                      />
                    )}
                  />
                </div>
                <div className={styles.errorMessage}>
                  {errors?.storeAddress && <span>{errors?.storeAddress?.message}</span>}
                </div>
              </>
            )}
            {deliveryMethod === DELIVERY_METHODS[0].text && (
              <>
                <label htmlFor='postcode' className={styles.sectionLabel}>
                  POSTCODE
                </label>
                <input
                  {...register('postcode', {
                    required: 'Поле должно быть заполнено',
                    minLength: { value: 9, message: 'Почтовый индекс должен состоять из 6 цифр' },
                  })}
                  type='tel'
                  inputMode='numeric'
                  maxLength='9'
                  autoComplete='postal-code'
                  onChange={({ target: { value } }) => setValue('postcode', normalizePostcode(value))}
                  id='postcode'
                  placeholder='BY _ _ _ _ _ _'
                  className={classNames({ [styles.inputError]: errors?.postcode })}
                />
                <div className={styles.errorMessage}>
                  {errors?.postcode && <span>{errors?.postcode?.message}</span>}
                </div>
              </>
            )}
            <div className={styles.agreement}>
              <input
                {...register('agreement', {
                  required: 'Вы должны согласиться на обработку личной информации',
                })}
                id='agreement'
                type='checkbox'
                className={classNames({ [styles.inputError]: errors?.agreement })}
              />
              <label htmlFor='agreement'>I agree to the processing of my personal information</label>
            </div>
            <div className={styles.errorMessage}>{errors?.agreement && <span>{errors?.agreement?.message}</span>}</div>
          </form>
        </div>
      )}
    </ConnectForm>
  );
};

export default DeliveryTab;
