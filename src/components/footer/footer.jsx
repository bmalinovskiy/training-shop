import React from 'react';

import TopBar from './top-bar';
import MainSection from './main-section';
import BottomBar from './bottom-bar';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer} data-test-id='footer'>
      <TopBar />
      <MainSection />
      <BottomBar />
    </footer>
  );
};

export default Footer;
