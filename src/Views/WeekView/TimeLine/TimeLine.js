import { useEffect, useRef, useState } from 'react';
import styles from './Timeline.module.scss';
import { SECOND, MIN_IN_DAY } from '../../../RC.consts';
import getMinutesFromMorning from '../../../utils/getMinutesFromMorning';

export default function Timeline() {
  const ref = useRef();
  const [topPosition, setTopPosition] = useState(0);
  const [time, setTime] = useState('');

  useEffect(() => {
    function setPosition() {
      if (ref.current) {
        const pxPerMin = ref.current.parentNode.scrollHeight / MIN_IN_DAY;
        const minNow = getMinutesFromMorning(new Date());

        setTopPosition(minNow * pxPerMin);
        setTime(new Date().getHours() + ':' + new Date().getMinutes());
      }
    }

    setPosition();

    const interval = setInterval(setPosition, SECOND);
    return () => clearInterval(interval);
  }, [setTopPosition]);

  return (
    <div
      className={styles.container}
      ref={ref}
      style={{ top: topPosition + 'px' }}
    >
      <div className={styles.time}>{time}</div>
    </div>
  );
}
