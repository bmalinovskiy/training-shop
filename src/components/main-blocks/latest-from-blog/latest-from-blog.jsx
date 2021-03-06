import React from 'react';

import { Link } from 'react-router-dom';

import { LATEST_FROM_BLOG } from '../../../constants/main-blocks';

import styles from './latest-from-blog.module.scss';

const LatestFromBlog = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>LATEST FROM BLOG</span>
          <Link to='/blog'>
            <span>SEE ALL</span>
          </Link>
        </div>
        <div className={styles.articles}>
          {LATEST_FROM_BLOG.map(({ id, title, text, name, imgPath }) => (
            <div key={id} className={styles.article}>
              <img src={imgPath} alt={name} />
              <div className={styles.label}>
                <span className={styles.title}>{title}</span>
                <span className={styles.text}>{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestFromBlog;
