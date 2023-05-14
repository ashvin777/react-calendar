import { useMemo } from 'react';
import getHoursInADay from '../../../utils/getHoursInADay';
import styles from './Hours.module.scss';
import getAmPm from '../../../utils/getAmPm';

export default function Hours({ days, firstDayOfWeek }) {
  const hours = useMemo(() => getHoursInADay(firstDayOfWeek), [firstDayOfWeek]);

  return hours.map((hour) => (
    <div className={styles.hour} key={hour}>
      <div className={styles.dayHour}>
        {getAmPm(hour)}
      </div>

      {days.map((day) => (
        <div className={styles.dayHour} key={day}></div>
      ))}
    </div>
  ));
}
