import { useMemo } from 'react';
import getHoursInADay from '../../../utils/getHoursInADay';
import styles from './Hours.module.scss';

export default function Hours({ days, firstDayOfWeek }) {
  const hours = useMemo(() => getHoursInADay(firstDayOfWeek), [firstDayOfWeek]);

  return hours.map((hour) => (
    <div className={styles.hour} key={hour}>
      <div className={styles.dayHour}>
        {hour.getHours() === 0
          ? 12
          : hour.getHours() > 12
          ? hour.getHours() - 12
          : hour.getHours()}
        {hour.getHours() < 12 ? 'am' : 'pm'}
      </div>

      {days.map((day) => (
        <div className={styles.dayHour} key={day}></div>
      ))}
    </div>
  ));
}
