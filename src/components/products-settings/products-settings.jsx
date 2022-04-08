import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import Filter from '../filter';

import { setFilterOpen } from '../../store/state/filter/actions';

import { filterSelector } from '../../selectors';

import filterIcon from '../../images/products/filter.svg';
import viewListIcon from '../../images/products/view-list.svg';
import viewGridIcon from '../../images/products/view-grid.svg';

import styles from './products-settings.module.scss';

const ProductsSettings = ({ productType }) => {
  const dispatch = useDispatch();
  const { isFilterOpen } = useSelector(filterSelector);

  const filterBtnClass = classNames({ [styles.filterBtn]: true, [styles.active]: isFilterOpen });

  const handleClick = () => {
    dispatch(setFilterOpen(!isFilterOpen));
  };

  useEffect(() => {
    dispatch(setFilterOpen(false));
  }, [dispatch, productType]);

  return (
    <>
      <div className={styles.container}>
        <button type='button' className={filterBtnClass} onClick={handleClick} data-test-id='filter-button'>
          <img src={filterIcon} alt='Filter' className={styles.icon} />
          <span className={styles.text}>FILTER</span>
        </button>
        <div className={styles.viewType}>
          <button type='button'>
            <img src={viewListIcon} alt='View list' />
          </button>
          <button type='button' className={styles.grid}>
            <img src={viewGridIcon} alt='View grid' />
          </button>
        </div>
      </div>
      {isFilterOpen && <Filter productType={productType} />}
    </>
  );
};

export default ProductsSettings;
