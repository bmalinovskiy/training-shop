import React, { useState } from 'react';

import PaymentInfo from './payment-info';
import AdditionalInfo from './additional-info';
import Reviews from '../reviews';

import color1 from '../../images/product/color-1.png';
import color2 from '../../images/product/color-2.png';
import color3 from '../../images/product/color-3.png';
import color4 from '../../images/product/color-4.png';

import clothesHanger from '../../images/product/clothes-hanger.svg';

import styles from './product-content.module.scss';

const ProductContent = () => {
  // delete later
  const colorList = [
    { id: '1', name: 'Blue', imgPath: color1 },
    { id: '2', name: 'White', imgPath: color2 },
    { id: '3', name: 'Black', imgPath: color3 },
    { id: '4', name: 'Grey', imgPath: color4 },
  ];

  const sizeList = [
    { id: '1', name: 'XS' },
    { id: '2', name: 'S' },
    { id: '3', name: 'M' },
    { id: '4', name: 'L' },
  ];
  // delete later

  const [activeColorId, setActiveColorId] = useState('1');
  const [activeColor, setActiveColor] = useState('Blue');

  const [activeSizeId, setActiveSizeId] = useState('2');
  const [activeSize, setActiveSize] = useState('S');

  return (
    <div className={styles.container}>
      <div className={styles.parameter}>
        <span className={styles.name}>COLOR:</span>
        <span className={styles.value}>{activeColor}</span>
      </div>
      <div className={styles.colorList}>
        {colorList.map(({ id, name, imgPath }) => (
          <button
            onClick={() => {
              setActiveColorId(id);
              setActiveColor(name);
            }}
            type='button'
            key={id}
            className={styles.item}
          >
            <img src={imgPath} alt={name} className={id === activeColorId ? styles.active : styles.inactive} />
          </button>
        ))}
      </div>
      <div className={styles.parameter}>
        <span className={styles.name}>SIZE:</span>
        <span className={styles.value}>{activeSize}</span>
      </div>
      <div className={styles.sizeList}>
        {sizeList.map(({ id, name }) => (
          <button
            onClick={() => {
              setActiveSizeId(id);
              setActiveSize(name);
            }}
            type='button'
            key={id}
            className={[styles.item, id === activeSizeId ? styles.active : styles.inactive].join(' ')}
          >
            <span>{name}</span>
          </button>
        ))}
      </div>
      <button type='button' className={styles.sizeGuide}>
        <img src={clothesHanger} alt='Clothes hanger' />
        <span className={styles.text}>Size guide</span>
      </button>
      <PaymentInfo />
      <div className={styles.description}>
        <hr />
        <span className={styles.title}>DESCRIPTION</span>
        <hr />
      </div>
      <AdditionalInfo
        infoList={[
          { id: '1', name: 'Color', value: ['Blue', 'White', 'Black', 'Grey'] },
          { id: '2', name: 'Size', value: ['XS', 'S', 'M', 'L'] },
          { id: '3', name: 'Material', value: ['100% Polyester'] },
        ]}
      />
      <hr />
      <Reviews />
      <hr />
    </div>
  );
};

export default ProductContent;
