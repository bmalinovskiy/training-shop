import React from 'react';

import switchUp from '../../images/product/switch-up.svg';
import switchDown from '../../images/product/switch-down.svg';
import switchLeft from '../../images/product/switch-left.svg';
import switchRight from '../../images/product/switch-right.svg';

import img2 from '../../images/product/img-2.png';
import img3 from '../../images/product/img-3.png';
import img4 from '../../images/product/img-4.png';
import img5 from '../../images/product/img-5.png';

import styles from './product-slider.module.scss';

const ProductSlider = () => {
  return (
    <div className={styles.productSlider}>
      <div className={styles.imgListSlider}>
        <div className={styles.listSwitchers}>
          <button type='button' className={styles.listSwitcher}>
            <img src={switchUp} alt='Switch up' />
          </button>
          <button type='button' className={styles.listSwitcher}>
            <img src={switchDown} alt='Switch down' />
          </button>
        </div>
        <div className={styles.imgList}>
          <img src={img2} alt='Img 2' className={styles.listItem} />
          <img src={img3} alt='Img 3' className={styles.listItem} />
          <img src={img4} alt='Img 4' className={styles.listItem} />
          <img src={img5} alt='Img 5' className={styles.listItem} />
        </div>
      </div>
      <div className={styles.imgViewSlider}>
        <button type='button' className={styles.viewSwitcher}>
          <img src={switchLeft} alt='Switch left' />
        </button>
        <button type='button' className={styles.viewSwitcher}>
          <img src={switchRight} alt='Switch right' />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
