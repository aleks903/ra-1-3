import React, { useState } from 'react';
import objCalendar from '../calendar.js';
import moment from 'moment';

export default function Calendar(props) {
  // const { date } = props;
  const [date, setDate] = useState(moment('2017-2-8'))
  const [calendar, setCalendar] = useState(objCalendar(date));
  // const date = new Date(2017, 2, 8);
  // let calendar = objCalendar(date);
  const handleUp = () => {
    setDate(date.add('months', 1));
    setCalendar(objCalendar(date));
    // console.log(calendar);
  }

  const handleDown = () => {
    setDate(date.subtract('months', 1));
    
    setCalendar(objCalendar(date));
    // console.log(calendar);
  }

console.log('render');

  return (
    <div className="ui-datepicker">
      <span onClick={handleUp}> + </span>
      <span onClick={handleDown}> - </span>
      {/* <div className="ui-datepicker-material-header">
      <div className="ui-datepicker-material-day">{calendar.nameWeak}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{calendar.numDay}</div>
          <div className="ui-datepicker-material-month">{calendar.nameMonthP}</div>
          <div className="ui-datepicker-material-year">{calendar.numYear}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{calendar.nameMonth}</span>&nbsp;<span className="ui-datepicker-year">{calendar.numYear}</span>
        </div>
      </div> */}
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
        {
        calendar.gridCalen.map((mWeak) => {
          const day = mWeak.map((ev) => {
            return <td className=
              {calendar.numMonth !== ev[1] ? "ui-datepicker-other-month" : "" || calendar.numDay === ev[2] ? "ui-datepicker-today" : ""}>
                {ev[2]}
              </td>
          });
          return <tr>{day}</tr>;
          })
        }
        </tbody>
      </table>
    </div>
  );
}