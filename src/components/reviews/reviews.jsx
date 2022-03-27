import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component';

import Rating from '../rating';

import { formSelector } from '../../selectors/form';
import { productsSelector } from '../../selectors/products';

import { sendReviewRequest, setReviewModalOpen } from '../../store/state/form/actions';

import useOnClickOutside from '../../hooks/on-click-outside';

import annotationIcon from '../../images/product/annotation.svg';

import styles from './reviews.module.scss';

const Reviews = ({ reviews }) => {
  const dispatch = useDispatch();

  const { isReviewModalOpen, isLoading } = useSelector(formSelector);
  const {
    products,
    currentProduct: { id: productId },
  } = useSelector(productsSelector);

  const reviewModalClass = classNames({ [styles.modal]: true, [styles.open]: isReviewModalOpen });

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
    dispatch(sendReviewRequest({ id: productId, name, text: review, rating: reviewRating }));
    reset();
  };

  useEffect(() => {
    dispatch(setReviewModalOpen(false));
  }, [dispatch, products]);

  const handleAddReview = () => {
    dispatch(setReviewModalOpen(true));
  };

  const ref = useRef();
  useOnClickOutside(ref, () => {
    if (isReviewModalOpen) {
      dispatch(setReviewModalOpen(false));
    }
  });

  useEffect(() => {
    if (isReviewModalOpen) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'auto';
  }, [isReviewModalOpen]);

  return (
    <>
      <div className={styles.container}>
        <span className={styles.title}>REVIEWS</span>
        <div className={styles.header}>
          <div className={styles.rating}>
            <Rating rating='5' />
            <span className={styles.text}>{`${reviews.length} Reviews`}</span>
          </div>
          <button type='button' className={styles.addReview} onClick={handleAddReview}>
            <img src={annotationIcon} alt='Annotation' />
            <span className={styles.text}>Write a review</span>
          </button>
        </div>
        <div className={styles.reviewList}>
          {reviews.map(({ id, name, text, rating }) => (
            <div key={id} className={styles.item}>
              <div className={styles.header}>
                <span className={styles.author}>{name}</span>
                <div className={styles.rating}>
                  <span className={styles.date}>3 months ago</span>
                  <Rating rating={rating} />
                </div>
              </div>
              <span className={styles.text}>{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={reviewModalClass}>
        <div ref={ref} className={styles.modalContent}>
          <h1>Write a review</h1>
          <ReactStars count={5} value={1} size={24} isHalf={false} onChange={handleChangeRating} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('name', {
                required: 'Введите имя',
                pattern: { value: /^[a-zA-Z]+$/, message: 'Введите корректное имя' },
                minLength: { value: 4, message: 'Минимум 4 символа' },
              })}
              placeholder='Имя'
            />
            {errors?.name && <span>{errors?.name?.message}</span>}
            <textarea {...register('review', { required: 'Введите отзыв' })} rows='12' placeholder='Комментарий' />
            {errors?.review && <span>{errors?.review?.message}</span>}
            <button type='submit' disabled={!isValid || isLoading}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reviews;
