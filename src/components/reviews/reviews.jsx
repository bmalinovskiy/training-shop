import React from 'react';

import Rating from '../rating';

import annotationIcon from '../../images/product/annotation.svg';

import styles from './reviews.module.scss';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>REVIEWS</span>
      <div className={styles.header}>
        <div className={styles.rating}>
          <Rating rating='5' />
          <span className={styles.text}>{`${reviews.length} Reviews`}</span>
        </div>
        <button type='button' className={styles.addReview}>
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
  );
};

export default Reviews;
