import React from 'react';

import { Link } from 'react-router-dom';

import { CATEGORIES, INFORMATION, USEFUL_LINKS } from '../../../constants/footer';

import LocationMarker from '../../../images/footer/location-marker.svg';
import Phone from '../../../images/footer/phone.svg';
import Clock from '../../../images/footer/clock.svg';
import Mail from '../../../images/footer/mail.svg';

import styles from './footer-menu.module.scss';

const FooterMenu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.item}>
          <span className={styles.title}>CATEGORIES</span>
          {CATEGORIES.map(({ id, path, name }) => (
            <Link key={id} to={path} className={styles.link} data-test-id={`footer-nav-link-${path.substring(1)}`}>
              <span>{name}</span>
            </Link>
          ))}
        </div>
        <div className={styles.item}>
          <span className={styles.title}>INFORMATION</span>
          {INFORMATION.map(({ id, path, name }) => (
            <Link key={id} to={path} className={styles.link}>
              <span>{name}</span>
            </Link>
          ))}
        </div>
        <div className={styles.item}>
          <span className={styles.title}>USEFUL LINKS</span>
          {USEFUL_LINKS.map(({ id, path, name }) => (
            <Link key={id} to={path} className={styles.link}>
              <span>{name}</span>
            </Link>
          ))}
        </div>
        <div className={[styles.item, styles.lastItem].join(' ')}>
          <span className={styles.title}>CONTACT US</span>
          <div className={styles.contactItem}>
            <img src={LocationMarker} alt='location-marker icon' />
            <span>Belarus, Gomel, Lange 17</span>
          </div>
          <div className={styles.contactItem}>
            <img src={Phone} alt='phone icon' />
            <span>+375 29 100 20 30</span>
          </div>
          <div className={styles.contactItem}>
            <img src={Clock} alt='clock icon' />
            <span>All week 24/7</span>
          </div>
          <div className={styles.contactItem}>
            <img src={Mail} alt='mail icon' />
            <span className={styles.underlineItem}>info@clevertec.ru</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
