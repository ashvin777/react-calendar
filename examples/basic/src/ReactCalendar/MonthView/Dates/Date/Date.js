import styles from './Date.module.scss';

export default function Date({ date }) {
  return (
    <div
      className={`${styles.date} ${
        date.isPrevMonth || date.isNextMonth ? styles.disabled : ''
      }`}
    >
      {date.date.getDate()}
    </div>
  );
}
