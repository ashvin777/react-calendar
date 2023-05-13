import React from 'react';
import { ReactCalendar, ReactCalenderProvider } from './ReactCalendar/';

import './App.css';

function App() {
  return (
    <ReactCalenderProvider>
      <div className='container'>
        <ReactCalendar>Tesitng 123</ReactCalendar>
      </div>
    </ReactCalenderProvider>
  );
}

export default App;
