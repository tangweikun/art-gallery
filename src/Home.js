import React from "react";
import styles from "./Home.module.scss";
import { LinkCard } from "./components/LinkCard";
import { SITE_LIST } from "./mock/siteList";

export function Home() {
  return (
    <div className={styles.wrapper}>
      {SITE_LIST.map((item, index) => (
        <LinkCard
          key={index}
          title={item.name}
          url={item.url}
          bgColor={item.bgColor}
          desc={item.description}
          repo={item.repo}
        />
      ))}
    </div>
  );
}
