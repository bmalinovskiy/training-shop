import React from 'react';

import SocialNetworks from '../social-networks';

import Phone from '../../../images/header/phone.svg';
import LocationMarker from '../../../images/header/location-marker.svg';
import Clock from '../../../images/header/clock.svg';

import styles from './header-top-bar.module.scss';

const HeaderTopBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul>
          <li>
            <img src={Phone} alt='Phone' />
            <span>+375 29 100 20 30</span>
          </li>
          <li>
            <img src={LocationMarker} alt='Location marker' />
            <span>Belarus, Gomel, Lange 17</span>
          </li>
          <li>
            <img src={Clock} alt='Clock' />
            <span>All week 24/7</span>
          </li>
        </ul>
        <SocialNetworks />
      </div>
    </div>
  );
};

export default HeaderTopBar;
