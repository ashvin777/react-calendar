import { useEffect, useRef, useState } from 'react';
import getMinutesFromMorning from '../../../utils/getMinutesFromMorning';
import { MIN_IN_DAY } from '../../../RC.consts';
import styles from './Event.module.scss';
import { useReactCalendar } from '../../../RC.provider';
import { TIME_COL_SIZE } from '../WeekView.consts';
import getDaysDifferenceBetweenDates from '../../../utils/getDaysDifferenceBetweenDates';

export default function Event({ event, firstDayOfWeek }) {
  const { daysInWeek, weekViewWidth } = useReactCalendar();
  const ref = useRef();
  const [position, setPosition] = useState({});

  useEffect(() => {
    if (ref.current && firstDayOfWeek) {
      const pxPerMin = ref.current.parentNode.scrollHeight / MIN_IN_DAY;
      const minTillStart = getMinutesFromMorning(event.startDate);
      const minTillEnd = getMinutesFromMorning(event.endDate);
      const startPosition = minTillStart * pxPerMin;
      const endPosition = minTillEnd * pxPerMin;

      const daysDiff = getDaysDifferenceBetweenDates(
        event.startDate,
        firstDayOfWeek
      );

      const perColSize = (weekViewWidth - TIME_COL_SIZE) / daysInWeek;

      setPosition({
        left: TIME_COL_SIZE + perColSize * daysDiff + 'px',
        top: startPosition + 3 + 'px',
        height: endPosition - startPosition - 5 + 'px',
        width: perColSize + 'px'
      });
    }
  }, [firstDayOfWeek, weekViewWidth, setPosition]);

  return (
    <div className={styles.event} style={position} ref={ref}>
      {event.name}
    </div>
  );
}
