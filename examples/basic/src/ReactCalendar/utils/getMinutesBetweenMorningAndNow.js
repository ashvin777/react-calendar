export default function getMinutesBetweenMorningAndNow() {
  const now = new Date();
  const morning = new Date();
  morning.setHours(0, 0, 0, 0);

  const minutes = (now - morning) / 60000;
  return minutes;
}