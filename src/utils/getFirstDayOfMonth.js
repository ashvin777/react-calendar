export default function getFirstDayOfMonth({ month, year }) {
  return new Date(`${month + 1}/01/${year}`);
}
