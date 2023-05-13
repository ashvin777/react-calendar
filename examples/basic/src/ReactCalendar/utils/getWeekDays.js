import { DAYS_IN_WEEK_SORT } from '../RC.consts';

export default function getWeekDays({ weekdayStartsFrom }) {
  return [
    ...DAYS_IN_WEEK_SORT.slice(weekdayStartsFrom),
    ...DAYS_IN_WEEK_SORT.slice(0, weekdayStartsFrom)
  ];
}
