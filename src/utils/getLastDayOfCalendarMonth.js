import { MS_IN_DAY } from '../RC.consts';
import getLastDayOfMonth from './getLastDayOfMonth';

export default function getLastDayOfCalendarMonth({
  month,
  year,
  weekdayStartsFrom
}) {
  const lastDayOfMonth = getLastDayOfMonth({ month, year });
  const weekdayOfLastDate = lastDayOfMonth.getDay();
  let weekdayEndsOn = weekdayStartsFrom - 1;

  if (weekdayOfLastDate > weekdayEndsOn) {
    weekdayEndsOn += 7;
  }

  const additionalDays = weekdayEndsOn - weekdayOfLastDate;

  const addTime = lastDayOfMonth.getTime() + MS_IN_DAY * additionalDays;

  const lastDayOfCalendarMonth = new Date();
  lastDayOfCalendarMonth.setTime(addTime);

  return lastDayOfCalendarMonth;
}
