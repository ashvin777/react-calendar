import Date from './Date/Date';
import styles from './Dates.module.scss';

export default function Dates({ dates }) {
  return (
    <div className={styles.dates}>
      {dates.map((date, index) => (
        <Date key={index} date={date} />
      ))}
    </div>
  );
}
