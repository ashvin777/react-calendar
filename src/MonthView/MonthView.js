import React, { useMemo, useState } from 'react';
import styles from './MonthView.module.scss';
import getFirstDayOfCalendarMonth from '../utils/getFirstDayOfCalendarMonth';
import getLastDayOfCalendarMonth from '../utils/getLastDayOfCalendarMonth';
import getWeekDays from '../utils/getWeekDays';
import getNextDay from '../utils/getNextDay';
import Days from './Days/Days';
import Dates from './Dates/Dates';

export default function MonthView() {
  const [date, setDate] = useState(new Date('12/01/2022'));
  const [weekdayStartsFrom] = useState(0);

  const firstDayOfCalendarMonth = useMemo(
    () =>
      getFirstDayOfCalendarMonth({
        month: date.getMonth(),
        year: date.getFullYear(),
        weekdayStartsFrom
      }),
    [date, weekdayStartsFrom]
  );

  const lastDayOfCalendarMonth = useMemo(
    () =>
      getLastDayOfCalendarMonth({
        month: date.getMonth(),
        year: date.getFullYear(),
        weekdayStartsFrom
      }),
    [date, weekdayStartsFrom]
  );

  const days = useMemo(
    () => getWeekDays({ weekdayStartsFrom }),
    [weekdayStartsFrom]
  );

  const dates = useMemo(() => {
    let tempDate = new Date(firstDayOfCalendarMonth);
    let dates = [];
    while (lastDayOfCalendarMonth.getTime() >= tempDate.getTime()) {
      dates.push({
        date: tempDate,
        isPrevMonth: tempDate.getMonth() < date.getMonth(),
        isNextMonth: tempDate.getMonth() > date.getMonth()
      });
      tempDate = getNextDay(tempDate);
    }

    return dates;
  }, [date, firstDayOfCalendarMonth, , lastDayOfCalendarMonth]);

  return (
    <>
      <div className={styles.container}>
        <Days days={days} />
        <Dates dates={dates} />
      </div>
    </>
  );
}
