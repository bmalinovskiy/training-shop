import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ProductHeader from '../../components/product-header';
import ProductSlider from '../../components/product-slider';
import ProductContent from '../../components/product-content';
import RelatedProducts from '../../components/related-products';

import styles from './product-page.module.scss';

const ProductPage = ({ headerProps }) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className={styles.product}>
        <ProductHeader {...headerProps} />
        <div className={styles.content}>
          <ProductSlider />
          <ProductContent />
        </div>
        <RelatedProducts />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
