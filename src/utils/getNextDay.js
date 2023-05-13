import { MS_IN_DAY } from '../RC.consts';

export default function getNextDay(date) {
  const newTime = date.getTime() + MS_IN_DAY;

  const newDate = new Date();
  newDate.setTime(newTime);

  return newDate;
}
