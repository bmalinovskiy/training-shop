import React from 'react';

import ratingStar from '../../images/rating/rating-star.svg';

import styles from './rating.module.scss';

const Rating = ({ rating }) => {
  const ratingStars = [...Array(Number(rating))].map((_, index) => index + 1);

  return (
    <div className={styles.rating}>
      {ratingStars.map((key) => (
        <img key={key} src={ratingStar} alt='Rating star' />
      ))}
    </div>
  );
};

export default Rating;
