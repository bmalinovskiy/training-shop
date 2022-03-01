import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ProductCards from '../../components/product-cards';
import ProductsHeader from '../../components/products-header';
import ProductsSettings from '../../components/products-settings';

import styles from './products-page.module.scss';

const ProductsPage = ({ productType, title }) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className={styles.products} data-test-id={`products-page-${productType}`}>
        <ProductsHeader title={title} />
        <ProductsSettings productType={productType} />
        <ProductCards productType={productType} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
