const {getCalendarView} = require('./view');

const {getMonthLength} = require('./util/getMonthLength');
const {getFirstDayIndex} = require('./util/getFirstDayIndex');

const getCalendar = (month, year) => {
    if (year < 1919) return 'Year is too small';
    if ( month < 1 || month > 12) return 'Incorrect month';

    const startDayIndex = getFirstDayIndex(month, year);
    const monthLength = getMonthLength(month, year);

    return getCalendarView(month, year, startDayIndex, monthLength);
};

console.log(getCalendar(6, 2020));
