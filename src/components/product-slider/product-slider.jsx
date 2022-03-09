/* eslint-disable import/no-unresolved */
// eslint swiper bug
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';

import swipeUp from '../../images/product/swipe-up.svg';
import swipeDown from '../../images/product/swipe-down.svg';
import swipePrev from '../../images/product/swipe-prev.svg';
import swipeNext from '../../images/product/swipe-next.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './swiper.scss';

const ProductSlider = ({ product: { images } }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = images.map(({ id, url }) => (
    <SwiperSlide key={id} className='swiper-slide'>
      <img src={`https://training.cleverland.by/shop${url}`} alt='Slide' />
    </SwiperSlide>
  ));

  return (
    <div className='product-slider' data-test-id='product-slider'>
      <div className='thumbs-swiper'>
        <div className='thumb-buttons'>
          <button type='button' className='thumbs-button-prev'>
            <img src={swipeUp} alt='Swipe prev' />
          </button>
          <button type='button' className='thumbs-button-next'>
            <img src={swipeDown} alt='Swipe next' />
          </button>
        </div>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={20}
          navigation={{
            nextEl: '.thumbs-button-next',
            prevEl: '.thumbs-button-prev',
          }}
          modules={[Navigation, Thumbs]}
          direction='vertical'
          className='swiper-thumbs'
        >
          {slides}
        </Swiper>
      </div>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className='main-swiper'
      >
        {slides}
        <button type='button' className='swiper-button-next'>
          <img src={swipeNext} alt='Swipe next' />
        </button>
        <button type='button' className='swiper-button-prev'>
          <img src={swipePrev} alt='Swipe prev' />
        </button>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
