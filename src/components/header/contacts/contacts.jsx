import React from 'react';

import Facebook from '../../../images/social/facebook.png';
import Twitter from '../../../images/social/twitter.png';
import Instagram from '../../../images/social/instagram.png';
import Pinterest from '../../../images/social/pinterest.png';

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
