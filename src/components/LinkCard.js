import React from 'react';
import styles from './LinkCard.module.scss';

export function LinkCard(props) {
  const { style = {} } = props;

  return (
    <div
      style={style}
      className={styles.wrapper}
      onClick={() => window.open(props.url)}
    >
      {props.title}
    </div>
  );
}
