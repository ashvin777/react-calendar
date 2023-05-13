export default function getLastDayOfMonth({ year, month }) {
  // Check for invalid input
  if (isNaN(year) || isNaN(month)) {
    throw new Error('Invalid input');
  }

  // Get the number of days in the month
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = daysInMonth[month];

  // If the year is a leap year and the month is February, add 1 to the number of days
  if (year % 4 === 0 && month === 1) {
    days++;
  } 

  // Return the last day of the month
  return new Date(year, month, days);
}
