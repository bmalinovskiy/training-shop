import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ProductHeader from '../../components/product-header';
import ProductSlider from '../../components/product-slider';
import ProductContent from '../../components/product-content';
import RelatedProducts from '../../components/related-products';
import ShoppingCart from '../../components/shopping-cart/shopping-cart';

import { getProductByIdRequest } from '../../store/state/products/actions';

import { productsSelector } from '../../selectors';

import styles from './product-page.module.scss';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(productsSelector);
  const { id, category } = useParams();
  const currentProduct = products[category].find(({ id: productId }) => productId === id);

  useEffect(() => {
    if (!products[category].length) {
      dispatch(getProductByIdRequest({ id }));
    }
  }, [category, dispatch, id, products]);

  return (
    <>
      <div className='wrapper'>
        <Header />
        {currentProduct && (
          <div className={styles.product} data-test-id={`product-page-${category}`}>
            <ProductHeader product={currentProduct} />
            <div className={styles.content}>
              <ProductSlider product={currentProduct} />
              <ProductContent product={currentProduct} />
            </div>
            <RelatedProducts product={currentProduct} productType={category} />
          </div>
        )}
        <Footer />
      </div>
      <ShoppingCart />
    </>
  );
};

export default ProductPage;
