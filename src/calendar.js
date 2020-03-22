import moment from 'moment';

export default function calemdar(date) {
  moment.updateLocale("en", { week: {
    dow: 1, // First day of week is Monday
  }});

  const mDate = moment(date);

  const nameMonth = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Авуст',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ];
  const nameMonthP = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Авуста',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря'
  ];
  const nameWeak = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];

  const numYear = mDate.get('year');
  const numMonth = mDate.get('month');
  const numDay = mDate.get('date')
  const numWeak = mDate.day() === 0 ? 6 : mDate.day() - 1;

  const daysInMonth = mDate.daysInMonth();
  const numbWeakFirstDay = mDate.day() === 0 ? 6 : mDate.day() - 1;

  let gridCalen = [];
  let tempDat = [];
  let itemWeak = 0;

  // before days
  for (let j = 0; j < numbWeakFirstDay; j += 1) {
    const preDate = moment.utc([numYear, numMonth, 1]).weekday(j).toArray();
    tempDat.push(preDate);
    itemWeak += 1;
  }

  // days
  for (let i = 0; i < daysInMonth; i += 1) {
    const preDate = moment.utc([numYear, numMonth, i + 1]).toArray();
    tempDat.push(preDate);
    if (itemWeak === 6) {
      gridCalen.push(tempDat);
      tempDat = [];
      itemWeak = 0;
    } else {
      itemWeak += 1;
    }
  }
  // after days
  for (let j = itemWeak; j < 7; j += 1) {
    const preDate = moment.utc([numYear, numMonth, daysInMonth]).weekday(j).toArray();
    tempDat.push(preDate);
  }
  gridCalen.push(tempDat);

  const objCalendar = {
    numYear,
    numMonth,
    numDay,
    nameWeak: nameWeak[numWeak],
    nameMonth: nameMonth[numMonth],
    nameMonthP: nameMonthP[numMonth],
    gridCalen,
  }

  return objCalendar;
}