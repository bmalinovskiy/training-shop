import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ProductHeader from '../../components/product-header';
import ProductSlider from '../../components/product-slider';
import ProductContent from '../../components/product-content';
import RelatedProducts from '../../components/related-products';

import styles from './product-page.module.scss';

const ProductPage = ({ productType }) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className={styles.product} data-test-id={`product-page-${productType}`}>
        <ProductHeader
          title={`Women's tracksuit Q109`}
          productType={productType}
          productId='620126dda5293589353a9c74'
          rating='5'
          sku='777'
          availability='In Stock'
        />
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
