export default function getNextMonth(date) {
  const month = date.getMonth();

  const newDate = new Date(date);
  newDate.setMonth(month === 11 ? 0 : month + 1);

  if (month === 11) {
    newDate.setFullYear(date.getFullYear() + 1);
  }

  return newDate;
}
