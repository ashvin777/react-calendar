import { useEffect, useRef, useState } from 'react';
import getMinutesBetweenMorningAnd from '../../../utils/getMinutesBetweenMorningAnd';
import { MIN_IN_DAY } from '../../../RC.consts';
import styles from './Event.module.scss';

export default function Event({ event }) {
  const ref = useRef();
  const [position, setPosition] = useState({});

  useEffect(() => {
    if (ref.current) {
      const pxPerMin = ref.current.parentNode.scrollHeight / MIN_IN_DAY;
      const minTillStart = getMinutesBetweenMorningAnd(event.startDate);
      const minTillEnd = getMinutesBetweenMorningAnd(event.endDate);
      const startPosition = minTillStart * pxPerMin;
      const endPosition = minTillEnd * pxPerMin;

      setPosition({
        top: startPosition + 3 + 'px',
        height: endPosition - startPosition - 5 + 'px'
      });
    }
  }, [setPosition]);

  return (
    <div className={styles.event} style={position} ref={ref}>
      {event.name}
    </div>
  );
}
