import React, { useState, useEffect } from 'react';

import PaymentInfo from './payment-info';
import AdditionalInfo from './additional-info';
import Reviews from '../reviews';

import clothesHanger from '../../images/product/clothes-hanger.svg';

import styles from './product-content.module.scss';

const ProductContent = ({ product: { name, price, discount, material, images, sizes, rating, reviews } }) => {
  const [activeColor, setActiveColor] = useState(images[0].color);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const colors = [...new Set(images.map(({ color }) => color))];

  const activeImageUrl = images.find(({ color }) => color === activeColor)?.url;

  useEffect(() => {
    setActiveColor(images[0].color);
    setActiveSize(sizes[0]);
  }, [images, sizes]);

  return (
    <div className={styles.container}>
      <div className={styles.parameter}>
        <span className={styles.name}>COLOR:</span>
        <span className={styles.value}>{activeColor}</span>
      </div>
      <div className={styles.colorList}>
        {colors
          .map((item) => images.find(({ color }) => color === item))
          .map(({ color, url }) => (
            <button
              onClick={() => {
                setActiveColor(color);
              }}
              type='button'
              key={color}
              className={[styles.item, color === activeColor ? styles.active : styles.inactive].join(' ')}
            >
              <img src={`https://training.cleverland.by/shop${url}`} alt={color} />
            </button>
          ))}
      </div>
      <div className={styles.parameter}>
        <span className={styles.name}>SIZE:</span>
        <span className={styles.value}>{activeSize}</span>
      </div>
      <div className={styles.sizeList}>
        {sizes.map((size) => (
          <button
            onClick={() => setActiveSize(size)}
            type='button'
            key={size}
            className={[styles.item, size === activeSize ? styles.active : styles.inactive].join(' ')}
          >
            <span>{size}</span>
          </button>
        ))}
      </div>
      <button type='button' className={styles.sizeGuide}>
        <img src={clothesHanger} alt='Clothes hanger' />
        <span className={styles.text}>Size guide</span>
      </button>
      <PaymentInfo
        name={name}
        price={price}
        discount={discount}
        color={activeColor}
        size={activeSize}
        imgUrl={activeImageUrl}
      />
      <div className={styles.description}>
        <hr />
        <span className={styles.title}>DESCRIPTION</span>
        <hr />
      </div>
      <AdditionalInfo
        infoList={[
          { id: '1', name: 'Color', value: [...colors] },
          { id: '2', name: 'Size', value: sizes },
          { id: '3', name: 'Material', value: [material] },
        ]}
      />
      <hr />
      <Reviews reviews={reviews} totalRating={rating} />
      <hr />
    </div>
  );
};

export default ProductContent;
