import React from 'react';

import Rating from '../rating';

import { REVIEWS } from '../../constants/product';

import annotationIcon from '../../images/product/annotation.svg';

import styles from './reviews.module.scss';

const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <span className={styles.title}>REVIEWS</span>
      <div className={styles.reviewsHeader}>
        <div className={styles.totalRating}>
          <Rating rating='5' />
          <span className={styles.totalRatingText}>2 Reviews</span>
        </div>
        <button type='button' className={styles.addReview}>
          <img src={annotationIcon} alt='Annotation' />
          <span className={styles.addReviewText}>Write a review</span>
        </button>
      </div>
      <div className={styles.reviewList}>
        {REVIEWS.map(({ id, author, text, rating }) => (
          <div key={id} className={styles.reviewItem}>
            <div className={styles.reviewHeader}>
              <span className={styles.reviewAuthor}>{author}</span>
              <div className={styles.reviewRating}>
                <span className={styles.reviewDate}>3 months ago</span>
                <Rating rating={rating} />
              </div>
            </div>
            <span className={styles.reviewText}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
