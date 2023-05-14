import { createContext, useContext, useState } from 'react';
import { VIEWS } from './RC.consts';

export const RCContext = createContext();

export default function ReactCalenderProvider({ children }) {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(VIEWS.MONTH);
  const [weekdayStartsFrom] = useState(0);
  const [weekViewWidth, setWeekViewWidth] = useState(0);

  return (
    <RCContext.Provider
      value={{
        date,
        view,
        weekViewWidth,
        setDate,
        setView,
        setWeekViewWidth,
        weekdayStartsFrom
      }}
    >
      {children}
    </RCContext.Provider>
  );
}

export function useReactCalendar() {
  return useContext(RCContext);
}
