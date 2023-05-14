export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const MS_IN_HOUR = MINUTE * 60;
export const MS_IN_DAY = MS_IN_HOUR * 24;
export const MIN_IN_DAY = 24 * 60;

export const DAYS_IN_WEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const DAYS_IN_WEEK_SORT = DAYS_IN_WEEK.map((day) => day.slice(0, 3));

export const VIEWS = {
  MONTH: 'month',
  WEEK: 'week'
};
