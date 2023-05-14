export default function getMinutesBetweenMorningAnd(dateTime) {
  const morning = new Date();
  morning.setHours(0, 0, 0, 0);

  const minutes = (dateTime - morning) / 60000;
  return minutes;
}