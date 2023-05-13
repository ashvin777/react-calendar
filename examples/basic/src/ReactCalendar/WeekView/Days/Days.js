import addDays from '../../utils/addDays';
import styles from './Days.module.scss';

export default function Days({ days, firstDayOfWeek }) {
  return (
    <div className={styles.days}>
      <div className={styles.day}></div>
      {days.map((day, index) => (
        <div className={styles.day} key={day}>
          <div className={styles.date}>
            {addDays(firstDayOfWeek, index).getDate()}
          </div>
          <div className={styles.dayName}>{day} </div>
        </div>
      ))}
    </div>
  );
}
