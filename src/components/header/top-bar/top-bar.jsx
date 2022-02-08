import React from 'react';

import Contacts from '../contacts';

import Phone from '../../../images/header/phone.svg';
import LocationMarker from '../../../images/header/location-marker.svg';
import Clock from '../../../images/header/clock.svg';

import styles from './top-bar.module.scss';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <ul>
          <li>
            <img src={Phone} alt='PhoneIcon' />
            <span>+375 29 100 20 30</span>
          </li>
          <li>
            <img src={LocationMarker} alt='LocationMarkerIcon' />
            <span>Belarus, Gomel, Lange 17</span>
          </li>
          <li>
            <img src={Clock} alt='ClockIcon' />
            <span>All week 24/7</span>
          </li>
        </ul>
        <Contacts />
      </div>
    </div>
  );
};

export default TopBar;
