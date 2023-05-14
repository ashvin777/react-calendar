import { useMemo } from 'react';
import { useReactCalendar } from '../../RC.provider';
import styles from './WeekView.module.scss';
import Days from './Days/Days';
import AllDays from './AllDays/AllDays';
import Hours from './Hours/Hours';
import getWeekDays from '../../utils/getWeekDays';
import getFirstDayOfWeek from '../../utils/getFirstDayOfWeek';
import Timeline from './TimeLine/TimeLine';

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
      <div className={styles.body}>
        <Hours firstDayOfWeek={firstDayOfWeek} days={days} />
        <Timeline />
      </div>
    </div>
  );
}
