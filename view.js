const {MONTHS_NAMES, DAYS_NAMES} = require('./constants');

const getDaysNamesView = () => DAYS_NAMES.map(day => day.toUpperCase()).join(' ');
const getCalendarHeadView = (monthNum, year) => `${MONTHS_NAMES[monthNum - 1].toUpperCase()} ${year}`;
const getDayView = day => day > 9 ? day : ` ${day}`;
const getOffsetView = startDayIndex => (startDayIndex % 7 !== 0) ? '\n ' + '   '.repeat(startDayIndex) : '';

const getCalendarView = (
    month,
    year,
    startDayIndex,
    monthLength,
) => {
    let result = '';

    result += getCalendarHeadView(month, year);
    result += '\n ' + getDaysNamesView();
    result += getOffsetView(startDayIndex);

    for (let index = startDayIndex; index < monthLength + startDayIndex; index++) {
        if (index % 7 === 0) result += '\n ';

        result += getDayView(index + 1 - startDayIndex);

        result += ' ';
    }

    return result;
};

module.exports = {
    getDaysNamesView,
    getCalendarHeadView,
    getDayView,
    getOffsetView,

    getCalendarView,
};
