import { MS_IN_HOUR } from '../RC.consts';

export default function getHoursInADay(date = new Date()) {
  const startHour = new Date(date);
  startHour.setHours(0);
  startHour.setMinutes(0);
  startHour.setSeconds(0);

  const hours = [];

  while (hours.length < 24) {
    hours.push(new Date(startHour.getTime() + MS_IN_HOUR * hours.length));
  }

  return hours;
}
