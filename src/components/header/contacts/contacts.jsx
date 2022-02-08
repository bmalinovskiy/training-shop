import React from 'react';

import Facebook from '../../../images/header/facebook.svg';
import Twitter from '../../../images/header/twitter.svg';
import Instagram from '../../../images/header/instagram.svg';
import Pinterest from '../../../images/header/pinterest.svg';

import styles from './contacts.module.scss';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <a href='https://www.facebook.com/'>
        <img src={Facebook} alt='Facebook' />
      </a>
      <a href='https://twitter.com/'>
        <img src={Twitter} alt='Twitter' />
      </a>
      <a href='https://www.instagram.com/'>
        <img src={Instagram} alt='Instagram' />
      </a>
      <a href='https://www.pinterest.com/'>
        <img src={Pinterest} alt='Pinterest' />
      </a>
    </div>
  );
};

export default Contacts;
