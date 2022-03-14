import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ProductHeader from '../../components/product-header';
import ProductSlider from '../../components/product-slider';
import ProductContent from '../../components/product-content';
import RelatedProducts from '../../components/related-products';
import ShoppingCart from '../../components/shopping-cart/shopping-cart';

import styles from './product-page.module.scss';

const ProductPage = ({ product, productType }) => {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <div className={styles.product} data-test-id={`product-page-${productType}`}>
          <ProductHeader product={product} />
          <div className={styles.content}>
            <ProductSlider product={product} />
            <ProductContent product={product} />
          </div>
          <RelatedProducts />
        </div>
        <Footer />
      </div>
      <ShoppingCart />
    </>
  );
};

export default ProductPage;
