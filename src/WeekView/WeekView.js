import { useMemo } from 'react';
import { useReactCalendar } from '../RC.provider';
import getWeekDays from '../utils/getWeekDays';
import styles from './WeekView.module.scss';
import Days from './Days/Days';
import AllDays from './AllDays/AllDays';
import getFirstDayOfWeek from '../utils/getFirstDayOfWeek';
import Hours from './Hours/Hours';

export default function WeekView() {
  const { date, weekdayStartsFrom } = useReactCalendar();

  const days = useMemo(
    () => getWeekDays({ weekdayStartsFrom }),
    [weekdayStartsFrom]
  );

  const firstDayOfWeek = useMemo(
    () => getFirstDayOfWeek({ date, weekdayStartsFrom }),
    [date, weekdayStartsFrom]
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Days days={days} firstDayOfWeek={firstDayOfWeek} />
        <AllDays days={days} />
      </div>
      <Hours firstDayOfWeek={firstDayOfWeek} days={days} />
    </div>
  );
}
