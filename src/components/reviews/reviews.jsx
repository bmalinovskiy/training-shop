import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component';

import { reviewFormSelector, productsSelector } from '../../selectors';

import { sendReviewRequest, setReviewModalOpen } from '../../store/state/review-form/actions';
import { getProductsRequest } from '../../store/state/products/actions';

import useOnClickOutside from '../../hooks/on-click-outside';

import annotationIcon from '../../images/product/annotation.svg';

import styles from './reviews.module.scss';

const Reviews = ({ reviews, totalRating }) => {
  const dispatch = useDispatch();
  const ref = useRef();

  const { id: productId } = useParams();

  const { isModalOpen, isLoading, error, responce } = useSelector(reviewFormSelector);
  const { products } = useSelector(productsSelector);

  const reviewModalClass = classNames({ [styles.modal]: true, [styles.open]: isModalOpen });

  const [reviewRating, setReviewRating] = useState(1);

  const handleChangeRating = (rate) => {
    setReviewRating(rate);
  };

  const {
    register,
    formState: { isValid, errors },
    reset,
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = ({ name, review }) => {
    dispatch(sendReviewRequest({ review: { id: productId, name, text: review, rating: reviewRating } }));
    reset();
  };

  const handleAddReview = () => {
    dispatch(setReviewModalOpen({ isModalOpen: true }));
  };

  useOnClickOutside(ref, () => {
    if (isModalOpen) {
      dispatch(setReviewModalOpen({ isModalOpen: false }));
    }
  });

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'auto';
  }, [isModalOpen]);

  useEffect(() => {
    if (responce) {
      dispatch(getProductsRequest());
    }
  }, [dispatch, responce]);

  useEffect(() => {
    dispatch(setReviewModalOpen({ isModalOpen: false }));
  }, [dispatch, products]);

  return (
    <>
      <div className={styles.container}>
        <span className={styles.title}>REVIEWS</span>
        <div className={styles.header}>
          <div className={styles.rating}>
            <ReactStars count={5} value={totalRating} size={14} color='#e7e7e7' activeColor='#f0cd85' edit={false} />
            <span className={styles.ratingText}>{`${reviews.length} Reviews`}</span>
          </div>
          <button type='button' className={styles.addReview} onClick={handleAddReview} data-test-id='review-button'>
            <img src={annotationIcon} alt='Annotation' />
            <span className={styles.text}>Write a review</span>
          </button>
        </div>
        <div className={styles.reviewList}>
          {reviews.map(({ id, name, text, rating }) => (
            <div key={id} className={styles.item}>
              <div className={styles.header}>
                <span>{name}</span>
                <ReactStars count={5} value={rating} size={14} color='#e7e7e7' activeColor='#f0cd85' edit={false} />
              </div>
              <span className={styles.text}>{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={reviewModalClass}>
        <div ref={ref} className={styles.modalContent} data-test-id='review-modal'>
          <h1>Write a review</h1>
          <ReactStars
            count={5}
            value={1}
            size={24}
            color='#e7e7e7'
            activeColor='#f0cd85'
            onChange={handleChangeRating}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('name', {
                required: 'Введите имя',
                minLength: { value: 4, message: 'Минимум 4 символа' },
              })}
              placeholder='Имя'
              data-test-id='review-name-field'
            />
            <div className={styles.errorMessage}>{errors?.name && <span>{errors?.name?.message}</span>}</div>
            <textarea
              {...register('review', { required: 'Введите отзыв' })}
              rows='12'
              placeholder='Комментарий'
              data-test-id='review-text-field'
            />
            <div className={styles.errorMessage}>
              {(errors?.review && <span>{errors?.review?.message}</span>) ||
                (error && <span>Ошибка отправки отзыва</span>)}
            </div>
            <button type='submit' disabled={!isValid || isLoading} data-test-id='review-submit-button'>
              {isLoading && <div className={styles.loader} />}
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reviews;
