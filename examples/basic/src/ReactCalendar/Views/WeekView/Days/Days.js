import Day, { DayEmpty } from '../Day/Day';
import styles from './Days.module.scss';

export default function Days({ days, firstDayOfWeek }) {
  return (
    <div className={styles.days}>
      <DayEmpty />
      {days.map((day, index) => (
        <Day
          day={day}
          key={index}
          firstDayOfWeek={firstDayOfWeek}
          index={index}
        />
      ))}
    </div>
  );
}
