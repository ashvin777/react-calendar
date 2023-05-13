import { MS_IN_DAY } from '../RC.consts';
import getFirstDayOfMonth from './getFirstDayOfMonth';

export default function getFirstDayOfCalendarMonth({
  month,
  year,
  weekdayStartsFrom
}) {
  const firstDayOfMonth = getFirstDayOfMonth({ month, year });
  const weekdayOfFirstDate = firstDayOfMonth.getDay();

  if (weekdayStartsFrom > weekdayOfFirstDate) {
    weekdayStartsFrom -= 7;
  }

  const additionalDays = weekdayOfFirstDate - weekdayStartsFrom;

  const reverseTime = firstDayOfMonth.getTime() - MS_IN_DAY * additionalDays;

  const firstDayOfCalendarMonth = new Date();
  firstDayOfCalendarMonth.setTime(reverseTime);

  return firstDayOfCalendarMonth;
}
