export default function getAmPm(date) {
  const hour =
    date.getHours() === 0
      ? 12
      : date.getHours() > 12
      ? date.getHours() - 12
      : date.getHours();

  const amPm = date.getHours() < 12 ? 'am' : 'pm';

  return hour + '' + amPm;
}
