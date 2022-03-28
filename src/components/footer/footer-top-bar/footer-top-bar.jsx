import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import { sendEmailRequest } from '../../../store/state/form/actions';

import { formSelector } from '../../../selectors/form';

import SocialNetworks from '../social-networks';

import styles from './footer-top-bar.module.scss';

const FooterTopBar = () => {
  const dispatch = useDispatch();

  const { isLoading, reviewError, emailResponce } = useSelector(formSelector);

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
        <span className={styles.title}>BE IN TOUCH WITH US:</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            placeholder='Enter your email'
            data-test-id='footer-mail-field'
          />
          <button type='submit' disabled={!isValid || isLoading} data-test-id='footer-subscribe-mail-button'>
            {isLoading && <div className={styles.loader} />}
            JOIN US
          </button>
          {emailResponce &&
            (reviewError ? (
              <span className={styles.subscribeError}>Ошибка при отправке почты</span>
            ) : (
              <span className={styles.subscribeSuccess}>Почта успешно отправлена</span>
            ))}
        </form>
        <SocialNetworks />
      </div>
    </div>
  );
};

export default FooterTopBar;
