import styles from './AllDays.module.scss';

export default function AllDays({ days }) {
  return (
    <div className={styles.allDays}>
      <div className={styles.allDay}>all day</div>
      {days.map((day) => (
        <div className={styles.allDay} key={day}>
          
        </div>
      ))}
    </div>
  );
}
