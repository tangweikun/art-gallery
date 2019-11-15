import React from "react";
import styles from "./LinkCard.module.scss";
import GITHUB_ICON from "../assets/github.svg";
import WEBSITE_ICON from "../assets/website.svg";

export function LinkCard(props) {
  return (
    <div
      className={styles.card}
      // onClick={() => window.open(props.url)}
    >
      <div style={{ background: props.bgColor }} className={styles.header}>
        {props.title}
      </div>
      <div className={styles.desc}>{props.desc}</div>
      <div className={styles.links}>
        <img
          src={WEBSITE_ICON}
          alt="website"
          style={{ marginRight: "20px" }}
          onClick={() => window.open(props.url)}
        />
        <img
          src={GITHUB_ICON}
          alt="github"
          onClick={() => window.open(props.repo)}
        />
      </div>
    </div>
  );
}
