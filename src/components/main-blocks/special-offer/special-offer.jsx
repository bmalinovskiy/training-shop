import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import { sendEmailRequest } from '../../../store/state/form/actions';

import { formSelector } from '../../../selectors/form';

import womanImage from '../../../images/main-blocks/special-offer/woman.svg';
import manImage from '../../../images/main-blocks/special-offer/man.svg';

import styles from './special-offer.module.scss';

const SpecialOffer = () => {
  const dispatch = useDispatch();

  const { isLoading, emailError, emailResponce } = useSelector(formSelector);

  const {
    register,
    formState: { isValid },
    reset,
    handleSubmit,
  } = useForm({ mode: 'onChange' });

  const onSubmit = ({ email }) => {
    dispatch(sendEmailRequest({ email }));
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={womanImage} alt='Woman' className={styles.womanImage} />
        <div className={styles.subscribe}>
          <span className={styles.title}>SPECIAL OFFER</span>
          <span className={styles.text}>
            SUBSCRIBE <br /> AND <span className={styles.highlighted}>GET 10% OFF</span>
          </span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('email', {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              placeholder='Enter your email'
            />
            {emailResponce &&
              (emailError ? (
                <span className={styles.subscribeError}>Ошибка при отправке почты</span>
              ) : (
                <span className={styles.subscribeSuccess}>Почта успешно отправлена</span>
              ))}
            <button type='submit' disabled={!isValid || isLoading}>
              SUBSCRIBE
            </button>
          </form>
        </div>
        <img src={manImage} alt='Man' className={styles.manImage} />
      </div>
    </div>
  );
};

export default SpecialOffer;
