import React from 'react';
import styles from './Home.module.scss';
import { LinkCard } from './components/LinkCard';
import { SITE_LIST } from './mock/siteList';

export function Home() {
  return (
    <div className={styles.wrapper}>
      {SITE_LIST.map((item, index) => (
        <LinkCard
          style={{ marginRight: 40 }}
          key={index}
          title={item.name}
          url={item.url}
        />
      ))}
    </div>
  );
}
