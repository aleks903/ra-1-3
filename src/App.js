import React from 'react';
import './App.css';

import ShowCalendarFunc from './components/ShowCalendarFunc.js';

function App() {
  const now = new Date(2017, 2, 8);

  return (
    <ShowCalendarFunc date={now} />
  )
}

export default App;
