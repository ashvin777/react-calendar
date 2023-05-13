import { MS_IN_DAY } from '../RC.consts';

//TODO use this inside getFirstDayOfCalendarMonth
export default function getFirstDayOfWeek({ date, weekdayStartsFrom }) {
  const weekdayOfFirstDate = date.getDay();

  if (weekdayStartsFrom > weekdayOfFirstDate) {
    weekdayStartsFrom -= 7;
  }

  const additionalDays = weekdayOfFirstDate - weekdayStartsFrom;

  const reverseTime = date.getTime() - MS_IN_DAY * additionalDays;

  const firstDayOfCalendarMonth = new Date();
  firstDayOfCalendarMonth.setTime(reverseTime);

  return firstDayOfCalendarMonth;
}
