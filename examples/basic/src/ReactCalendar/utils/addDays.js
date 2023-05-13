import { MS_IN_DAY } from '../RC.consts';

export default function addDays(date, daysToAdd) {
  const newTime = date.getTime() + MS_IN_DAY * daysToAdd;

  const newDate = new Date();
  newDate.setTime(newTime);

  return newDate;
}
