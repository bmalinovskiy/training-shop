import React from 'react';

import { SOCIAL_ICONS } from '../../../constants/footer';

import styles from './contacts.module.scss';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      {SOCIAL_ICONS.map(({ id, path, name, link }) => (
        <a key={id} href={link}>
          <img src={path} alt={name} />
        </a>
      ))}
    </div>
  );
};

export default Contacts;
