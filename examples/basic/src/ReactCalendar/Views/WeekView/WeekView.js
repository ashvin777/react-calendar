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
import useWindowSize from '../../hooks/useWindowSize';

export default function WeekView() {
  const ref = useRef();
  const { windowWidth } = useWindowSize();

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
  }, [setWeekViewWidth, windowWidth]);

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
          firstDayOfWeek={firstDayOfWeek}
          event={{
            name: 'Standup',
            startDate: new Date('05/14/2023 12:00'),
            endDate: new Date('05/14/2023 13:00')
          }}
        />

        <Event
          firstDayOfWeek={firstDayOfWeek}
          event={{
            name: 'Meeting with Team',
            startDate: new Date('05/14/2023 02:30'),
            endDate: new Date('05/14/2023 08:45')
          }}
        />

        <Event
          firstDayOfWeek={firstDayOfWeek}
          event={{
            name: 'Tomorrow meeting',
            startDate: new Date('05/15/2023 01:30'),
            endDate: new Date('05/15/2023 02:45')
          }}
        />
      </div>
    </div>
  );
}
