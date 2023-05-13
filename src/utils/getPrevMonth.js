export default function getPrevMonth(date) {
  const month = date.getMonth();

  const newDate = new Date(date);
  newDate.setMonth(month === 0 ? 11 : month - 1);

  if (month === 0) {
    newDate.setFullYear(date.getFullYear() - 1);
  }

  return newDate;
}
