import { useState } from 'react';
import styles from './Events.module.scss';

export default function Event({ event }) {
  const ref = useRef();

  return <div className={styles.event}>Some event</div>;
}
