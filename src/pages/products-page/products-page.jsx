import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ProductCards from '../../components/product-cards';
import ProductsHeader from '../../components/products-header';
import ProductsSettings from '../../components/products-settings';

import styles from './products-page.module.scss';

const ProductsPage = ({ products, productType, title }) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className={styles.content}>
        <ProductsHeader title={title} />
        <ProductsSettings />
        <ProductCards products={products} productType={productType} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
