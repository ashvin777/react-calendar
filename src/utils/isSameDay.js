export default function isSameDay(date1, date2) {
  return date1.toISOString().slice(0, 10) === date2.toISOString().slice(0, 10);
}
