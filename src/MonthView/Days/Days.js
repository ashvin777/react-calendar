import styles from './Days.module.scss';

export default function Days({ days }) {
  return (
    <div className={styles.days}>
      {days.map((day) => (
        <div className={styles.day} key={day}>
          {day}
        </div>
      ))}
    </div>
  );
}
