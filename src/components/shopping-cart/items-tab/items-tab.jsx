import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { shoppingCartSelector } from '../../../selectors';

import { changeQuantity, removeItemFromCart } from '../../../store/state/shopping-cart/actions';

import trashIcon from '../../../images/shopping-cart/trash.svg';
import minusIcon from '../../../images/shopping-cart/minus.svg';
import plusIcon from '../../../images/shopping-cart/plus.svg';

import styles from './items-tab.module.scss';

const ItemsTab = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(shoppingCartSelector);

  const handleRemoveItem = (id) => dispatch(removeItemFromCart({ id }));

  return (
    <div className={styles.itemsTab}>
      {items.map(({ id, name, quantity, price, color, size, imgUrl }) => (
        <div key={id}>
          <div className={styles.item} data-test-id='cart-card'>
            <img src={`https://training.cleverland.by/shop${imgUrl}`} alt={name} className={styles.itemImg} />
            <div className={styles.details}>
              <span className={styles.name}>{name}</span>
              <span className={styles.features}>{`${color}, ${size}`}</span>
              <div className={styles.itemActions}>
                <div className={styles.number}>
                  <button
                    type='button'
                    className={styles.minus}
                    onClick={() => dispatch(changeQuantity({ id, value: quantity - 1 }))}
                    data-test-id='minus-product'
                  >
                    <img src={minusIcon} alt='Minus' />
                  </button>
                  <input
                    type='text'
                    maxLength='2'
                    value={quantity}
                    onChange={({ target: { value } }) => dispatch(changeQuantity({ id, value: Number(value) }))}
                  />
                  <button
                    type='button'
                    className={styles.plus}
                    onClick={() => dispatch(changeQuantity({ id, value: quantity + 1 }))}
                    data-test-id='plus-product'
                  >
                    <img src={plusIcon} alt='Plus' />
                  </button>
                </div>
                <h4 className={styles.price}>$ {(price * quantity).toFixed(2)}</h4>
                <button
                  type='button'
                  className={styles.trash}
                  onClick={() => handleRemoveItem(id)}
                  data-test-id='remove-product'
                >
                  <img src={trashIcon} alt='Delete item' />
                </button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ItemsTab;
