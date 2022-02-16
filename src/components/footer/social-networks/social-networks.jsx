import React from 'react';

import { SOCIAL_NETWORKS } from '../../../constants/footer';

import styles from './social-networks.module.scss';

const SocialNetworks = () => {
  return (
    <div className={styles.container}>
      {SOCIAL_NETWORKS.map(({ id, path, name, link }) => (
        <a key={id} href={link} className={styles.link}>
          <img src={path} alt={name} />
        </a>
      ))}
    </div>
  );
};

export default SocialNetworks;
