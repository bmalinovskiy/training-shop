import React from 'react';

import ratingStar from '../../images/rating/rating-star.svg';
import nonRatingStar from '../../images/rating/non-rating-star.svg';

import styles from './rating.module.scss';

const Rating = ({ rating }) => {
  const ratingStars = [...Array(Number(rating))].map((_, index) => index + 1);
  const nonRatingStars = [...Array(5 - Number(rating))].map((_, index) => index + 1);

  return (
    <div className={styles.rating}>
      {ratingStars.map((key) => (
        <img key={key} src={ratingStar} alt='Rating star' />
      ))}
      {nonRatingStars.map((key) => (
        <img key={key} src={nonRatingStar} alt='Non-rating star' />
      ))}
    </div>
  );
};

export default Rating;
