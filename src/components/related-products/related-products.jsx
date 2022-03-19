/* eslint-disable import/no-unresolved */
// eslint swiper bug
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import ProductCard from '../product-card';

import { getProductsRequest } from '../../store/state/products/actions';

import { productsSelector } from '../../selectors';

import swipePrev from '../../images/product/swipe-prev.svg';
import swipeNext from '../../images/product/swipe-next.svg';

import 'swiper/css';
import 'swiper/css/navigation';

import './swiper.scss';

import styles from './related-products.module.scss';

const RelatedProducts = ({ product, productType }) => {
  const dispatch = useDispatch();
  const { products } = useSelector(productsSelector);
  const relatedProducts = products[productType]
    .filter(({ id }) => id !== product.id)
    .map((card) => (
      <SwiperSlide key={card.id}>
        <ProductCard card={card} productType={card.category} />
      </SwiperSlide>
    ));

  useEffect(() => {
    if (!products[productType].length) {
      dispatch(getProductsRequest());
    }
  }, [dispatch, productType, products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>RELATED PRODUCTS</span>
          <div className={styles.sliderNav}>
            <button type='button' className='swipe-prev'>
              <img src={swipePrev} alt='Swipe prev' />
            </button>
            <button type='button' className='swipe-next'>
              <img src={swipeNext} alt='Swipe next' />
            </button>
          </div>
        </div>
        <Swiper
          navigation={{ nextEl: '.swipe-next', prevEl: '.swipe-prev' }}
          slidesPerView={4}
          spaceBetween={16}
          modules={[Navigation]}
          breakpoints={{
            360: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1170: { slidesPerView: 4 },
          }}
          className={styles.slider}
          data-test-id='related-slider'
        >
          {relatedProducts}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProducts;
