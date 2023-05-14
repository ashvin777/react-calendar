import { MS_IN_DAY } from '../RC.consts';

export default function getDaysDifferenceBetweenDates(startDate, endDate) {
  const startDateFromMorning = new Date(startDate);
  const endDateFromMorning = new Date(endDate);

  startDateFromMorning.setHours(0, 0, 0, 0);
  endDateFromMorning.setHours(0, 0, 0, 0);

  const differenceInMilliseconds = Math.abs(
    endDateFromMorning.getTime() - startDateFromMorning.getTime()
  );

  return Math.floor(differenceInMilliseconds / MS_IN_DAY);
}
