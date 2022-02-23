// eslint swiper bug
/* eslint-disable import/no-unresolved */
import React from 'react';

import { Link } from 'react-router-dom';

import { Navigation, Virtual } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import swipePrev from '../../../../images/product/swipe-prev.svg';
import swipeNext from '../../../../images/product/swipe-next.svg';

import bannerImg from '../../../../images/main-blocks/top-section/banner.svg';

import 'swiper/css';
import 'swiper/css/navigation';

import './swiper.scss';
import styles from './banners.module.scss';

const Banners = () => {
  const slides = [...Array(3)].map((_, index) => `Slide ${index + 1}`);
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Virtual]}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        virtual
        data-test-id='main-slider'
      >
        {slides.map((key) => (
          <SwiperSlide key={key} virtualIndex={key} className='swiper-slide'>
            <img src={bannerImg} alt='Banner' />
          </SwiperSlide>
        ))}
        <button type='button' className='swiper-button-next'>
          <img src={swipeNext} alt='Swipe next' />
        </button>
        <button type='button' className='swiper-button-prev'>
          <img src={swipePrev} alt='Swipe prev' />
        </button>
        <div className={styles.label}>
          <span className={styles.title}>BANNER</span>
          <span className={styles.text}>YOUR TITLE TEXT</span>
        </div>
      </Swiper>
      <div className={styles.womenBanner}>
        <Link to='/women' className={styles.bannerTitle}>
          <span>WOMEN</span>
        </Link>
      </div>
      <div className={styles.menBanner}>
        <Link to='/men' className={styles.bannerTitle}>
          <span>MEN</span>
        </Link>
      </div>
      <div className={styles.accessoriesBanner}>
        <Link to='/accessories' className={styles.bannerTitle}>
          <span>ACCESSORIES</span>
        </Link>
      </div>
    </div>
  );
};

export default Banners;
