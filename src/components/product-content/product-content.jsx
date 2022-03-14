import React, { useState } from 'react';

import PaymentInfo from './payment-info';
import AdditionalInfo from './additional-info';
import Reviews from '../reviews';

import clothesHanger from '../../images/product/clothes-hanger.svg';

import styles from './product-content.module.scss';

const ProductContent = ({ product: { name, price, material, images, sizes, reviews } }) => {
  const [activeColorId, setActiveColorId] = useState(images[0].id);
  const [activeColor, setActiveColor] = useState(images[0].color);

  const [activeSize, setActiveSize] = useState(sizes[0]);

  const colors = [...new Set(images.map(({ color }) => color))];

  return (
    <div className={styles.container}>
      <div className={styles.parameter}>
        <span className={styles.name}>COLOR:</span>
        <span className={styles.value}>{activeColor}</span>
      </div>
      <div className={styles.colorList}>
        {colors
          .map((item) => images.find(({ color }) => color === item))
          .map(({ id: colorId, color, url }) => (
            <button
              onClick={() => {
                setActiveColorId(colorId);
                setActiveColor(color);
              }}
              type='button'
              key={colorId}
              className={[styles.item, colorId === activeColorId ? styles.active : styles.inactive].join(' ')}
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
        color={activeColor}
        size={activeSize}
        imgUrl={images.find(({ color }) => color === activeColor).url}
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
      <Reviews reviews={reviews} />
      <hr />
    </div>
  );
};

export default ProductContent;
