import React from 'react';

import FooterTopBar from './footer-top-bar';
import FooterMenu from './footer-menu';
import FooterBottomBar from './footer-bottom-bar';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper} data-test-id='footer'>
      <FooterTopBar />
      <FooterMenu />
      <FooterBottomBar />
    </footer>
  );
};

export default Footer;
