import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import ConnectForm from '../connect-form';

import { setPaymentMethod } from '../../../store/state/shopping-cart/actions';

import { shoppingCartSelector } from '../../../selectors';

import { PAYMENT_METHODS } from '../../../constants/shopping-cart';
import { emailPattern, numbersPattern } from '../../../constants/patters';

import { normalizeCardNumber, normalizeCardDate, isCorrectCardDate } from '../../../utils/masks';

import eyeSlashIcon from '../../../images/shopping-cart/eye-slash.svg';

import styles from './payment-tab.module.scss';

const PaymentTab = () => {
  const dispatch = useDispatch();

  const { paymentMethod } = useSelector(shoppingCartSelector);

  const [isInputVisible, setInputVisible] = useState(false);

  return (
    <ConnectForm>
      {({ register, errors, setValue }) => (
        <div className={styles.paymentTab}>
          <span>Method of payments</span>
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
                    onChange={({ target: { value } }) => dispatch(setPaymentMethod({ paymentMethod: value }))}
                  />
                  <label htmlFor={id}>
                    <img src={imgPath} height='32px' alt={name} />
                  </label>
                </div>
                <hr />
              </React.Fragment>
            ))}
            <div className={styles.paymentMethodItem}>
              <input
                type='radio'
                name='payment-method'
                id='Cash'
                value='Cash'
                checked={paymentMethod === 'Cash'}
                onChange={({ target: { value } }) => dispatch(setPaymentMethod({ paymentMethod: value }))}
              />
              <label htmlFor='Cash'>Cash</label>
            </div>
            <hr />
            {(paymentMethod === PAYMENT_METHODS[1].name || paymentMethod === PAYMENT_METHODS[2].name) && (
              <div className={styles.cardPayment}>
                <label htmlFor='card'>CARD</label>
                <input
                  {...register('card', {
                    required: 'Поле должно быть заполнено',
                    minLength: { value: 19, message: 'Номер карты должен состоять из 16 цифр' },
                  })}
                  placeholder='_ _ _ _  _ _ _ _  _ _ _ _  _ _ _ _'
                  type='tel'
                  id='card'
                  inputMode='numeric'
                  autoComplete='cc-number'
                  onChange={({ target: { value } }) => setValue('card', normalizeCardNumber(value))}
                  className={classNames({ [styles.inputError]: errors?.card })}
                />
                <div className={styles.errorMessage}>{errors?.card && <span>{errors?.card?.message}</span>}</div>
                <div className={styles.cardPart}>
                  <div className={styles.cardDate}>
                    <input
                      {...register('cardDate', {
                        required: 'Поле должно быть заполнено',
                        minLength: { value: 5, message: 'Срок действия должен состоять из 4 цифр' },
                        validate: isCorrectCardDate,
                      })}
                      placeholder='YY/MM'
                      type='tel'
                      inputMode='numeric'
                      autoComplete='cc-exp'
                      onChange={({ target: { value } }) => setValue('cardDate', normalizeCardDate(value))}
                      className={classNames({ [styles.inputError]: errors?.cardDate })}
                    />
                    <div className={styles.errorMessage}>
                      {errors?.cardDate && <span>{errors?.cardDate?.message}</span>}
                    </div>
                  </div>
                  <div className={styles.cardCVV}>
                    <div>
                      <input
                        {...register('cardCVV', {
                          required: 'Поле должно быть заполнено',
                          minLength: { value: 3, message: 'CVV код должен состоять из 3 цифр' },
                        })}
                        onChange={({ target: { value } }) => setValue('cardCVV', value.replace(numbersPattern, ''))}
                        placeholder='CVV'
                        maxLength='3'
                        type={isInputVisible ? 'text' : 'password'}
                        inputMode='numeric'
                        autoComplete='cc-scs'
                        className={classNames({ [styles.cvvError]: errors?.cardCVV })}
                      />
                      <button
                        type='button'
                        onClick={() => setInputVisible(!isInputVisible)}
                        className={classNames({
                          [styles.cvvError]: errors?.cardCVV,
                          [styles.visible]: isInputVisible,
                        })}
                      >
                        <img src={eyeSlashIcon} alt='See code' />
                      </button>
                    </div>
                    <div className={styles.errorMessage}>
                      {errors?.cardCVV && <span>{errors?.cardCVV?.message}</span>}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {paymentMethod === PAYMENT_METHODS[0].name && (
              <div className={styles.payPalPayment}>
                <label htmlFor='cashEmail'>E-MAIL</label>
                <input
                  {...register('cashEmail', {
                    required: 'Поле должно быть заполнено',
                    pattern: {
                      value: emailPattern,
                      message: 'Введите корректный email',
                    },
                  })}
                  type='email'
                  id='cashEmail'
                  placeholder='e-mail'
                  className={classNames({ [styles.inputError]: errors?.cashEmail })}
                />
                <div className={styles.errorMessage}>
                  {errors?.cashEmail && <span>{errors?.cashEmail?.message}</span>}
                </div>
              </div>
            )}
          </form>
        </div>
      )}
    </ConnectForm>
  );
};

export default PaymentTab;
