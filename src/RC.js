import React from 'react';
import styles from './RC.module.scss';

import getPrevMonth from './utils/getPrevMonth';
import getNextMonth from './utils/getNextMonth';
import MonthView from './MonthView/MonthView';
import { VIEWS } from './RC.consts';
import WeekView from './WeekView/WeekView';
import { useReactCalendar } from './RC.provider';

export default function RC() {
  const { date, setDate, view, setView } = useReactCalendar();

  return (
    <>
      {date.toString()}
      <button onClick={() => setDate(getPrevMonth(date))}>Previous</button>
      <button onClick={() => setDate(getNextMonth(date))}>Next</button>

      <br />
      <button
        onClick={() => setView(VIEWS.MONTH)}
        disabled={view === VIEWS.MONTH}
      >
        Month
      </button>
      <button
        onClick={() => setView(VIEWS.WEEK)}
        disabled={view === VIEWS.WEEK}
      >
        Week
      </button>

      {view === VIEWS.MONTH && <MonthView />}
      {view === VIEWS.WEEK && <WeekView />}
    </>
  );
}
