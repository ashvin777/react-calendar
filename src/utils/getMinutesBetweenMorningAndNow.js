export default function getMinutesBetweenMorningAndNow() {
  // Get the current time
  const now = new Date();

  // Get the morning time
  const morning = new Date();
  morning.setHours(0, 0, 0, 0);


  console.log(morning, now);
  // Get the difference in minutes
  const minutes = (now - morning) / 60000;

  // Return the difference in minutes
  return minutes;
}