import React, { useState } from 'react';
import styles from './RC.module.scss';

import getPrevMonth from './utils/getPrevMonth';
import getNextMonth from './utils/getNextMonth';
import MonthView from './MonthView/MonthView';

export default function RC() {
  const [date, setDate] = useState(new Date('12/01/2022'));

  return (
    <>
      {date.toString()}
      <button onClick={() => setDate(getPrevMonth(date))}>Previous</button>
      <button onClick={() => setDate(getNextMonth(date))}>Next</button>
      <MonthView />
    </>
  );
}
