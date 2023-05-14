import { useEffect, useMemo, useRef } from 'react';
import { useReactCalendar } from '../../RC.provider';
import styles from './WeekView.module.scss';
import Days from './Days/Days';
import AllDays from './AllDays/AllDays';
import Hours from './Hours/Hours';
import getWeekDays from '../../utils/getWeekDays';
import getFirstDayOfWeek from '../../utils/getFirstDayOfWeek';
import Timeline from './TimeLine/TimeLine';
import Event from './Event/Event';

export default function WeekView() {
  const ref = useRef();
  const { date, weekdayStartsFrom, setWeekViewWidth } = useReactCalendar();

  const days = useMemo(
    () => getWeekDays({ weekdayStartsFrom }),
    [weekdayStartsFrom]
  );

  const firstDayOfWeek = useMemo(
    () => getFirstDayOfWeek({ date, weekdayStartsFrom }),
    [date, weekdayStartsFrom]
  );

  useEffect(() => {
    if (ref.current) {
      setWeekViewWidth(ref.current.clientWidth);
    }
  }, [setWeekViewWidth]);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.header}>
        <Days days={days} firstDayOfWeek={firstDayOfWeek} />
        <AllDays days={days} />
      </div>
      <div className={styles.body}>
        <Hours firstDayOfWeek={firstDayOfWeek} days={days} />
        <Timeline />
        <Event
          event={{
            name: 'Meeting with Team',
            startDate: new Date('05/14/2023 12:00'),
            endDate: new Date('05/14/2023 13:00')
          }}
        />

        <Event
          event={{
            name: 'Meeting with Team',
            startDate: new Date('05/14/2023 02:30'),
            endDate: new Date('05/14/2023 08:45')
          }}
        />
      </div>
    </div>
  );
}
