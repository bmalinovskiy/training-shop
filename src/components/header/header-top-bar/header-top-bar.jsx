import React from 'react';

import SocialNetworks from '../social-networks';

import phoneIcon from '../../../images/header/phone.svg';
import locationMarkerIcon from '../../../images/header/location-marker.svg';
import clockIcon from '../../../images/header/clock.svg';

import styles from './header-top-bar.module.scss';

const HeaderTopBar = () => {
  const contactList = [
    { id: '1', text: '+375 29 100 20 30', imgPath: phoneIcon },
    { id: '2', text: 'Belarus, Gomel, Lange 17', imgPath: locationMarkerIcon },
    { id: '3', text: 'All week 24/7', imgPath: clockIcon },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul>
          {contactList.map(({ id, text, imgPath }) => (
            <li key={id}>
              <img src={imgPath} alt='Contact icon' />
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <SocialNetworks />
      </div>
    </div>
  );
};

export default HeaderTopBar;
