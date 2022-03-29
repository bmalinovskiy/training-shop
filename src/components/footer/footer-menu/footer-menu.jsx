import React from 'react';
import { Link } from 'react-router-dom';

import { CATEGORIES, INFORMATION, USEFUL_LINKS } from '../../../constants/footer';

import LocationMarker from '../../../images/footer/location-marker.svg';
import Phone from '../../../images/footer/phone.svg';
import Clock from '../../../images/footer/clock.svg';
import Mail from '../../../images/footer/mail.svg';

import styles from './footer-menu.module.scss';

const FooterMenu = () => {
  const footerMenuLinks = [
    { title: 'CATEGORIES', items: CATEGORIES },
    { title: 'INFORMATION', items: INFORMATION },
    { title: 'USEFUL LINKS', items: USEFUL_LINKS },
  ];

  const footerMenuContacts = [
    { id: '1', text: 'Belarus, Gomel, Lange 17', imgPath: LocationMarker },
    { id: '2', text: '+375 29 100 20 30', imgPath: Phone },
    { id: '3', text: 'All week 24/7', imgPath: Clock },
    { id: '4', text: 'info@clevertec.ru', imgPath: Mail },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {footerMenuLinks.map(({ title, items }) => (
          <div key={title} className={styles.item}>
            <span className={styles.title}>{title}</span>
            {items.map(({ id, path, name }) => (
              <Link key={id} to={path} className={styles.link}>
                <span>{name}</span>
              </Link>
            ))}
          </div>
        ))}
        <div className={styles.item}>
          <span className={styles.title}>CONTACT US</span>
          {footerMenuContacts.map(({ id, text, imgPath }) => (
            <div key={id} className={styles.contactItem}>
              <img src={imgPath} alt='Contact icon' />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
