import { useCallback } from 'react';
import addDays from '../../../utils/addDays';
import isSameDay from '../../../utils/isSameDay';
import styles from './Day.module.scss';

export default function Day({ index, day, firstDayOfWeek }) {
  const isToday = useCallback((date) => isSameDay(date, new Date()), []);

  const getDateByIndex = useCallback(
    (index) => addDays(firstDayOfWeek, index),
    [firstDayOfWeek]
  );

  return (
    <div
      className={`${styles.day} ${
        isToday(getDateByIndex(index)) ? styles.today : ''
      }`}
    >
      <div className={styles.date}>{getDateByIndex(index).getDate()}</div>
      <div className={styles.dayName}>{day} </div>
    </div>
  );
}

export function DayEmpty() {
  return <div className={styles.day}></div>;
}
