import { useState } from 'react';
import styles from './Events.module.scss';

export default function Events() {
  const [events, setEvents] = useState([
    {
      startDate: new Date('05/14/2023 12:00'),
      endDate: new Date('05/14/2023 12:00')
    }
  ]);

  return events.map((event, index) => (
    <div key={index} className={styles.event}>Some event</div>
  ));
}
