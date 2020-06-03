const getGradualSumArray = arr => {
    const arrayCopy = [...arr];

    let sum = 0;
    for (const ind in arr) {
        arrayCopy[ind] = sum;
        sum += arr[ind];
    }

    return arrayCopy;
};

const FEBRUARY_IND = 1;
const MONTHS_LENGTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30,31];
const GRADUAL_MONTHS_OFFSET = getGradualSumArray(MONTHS_LENGTHS);
const MONTHS_NAMES = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];
const DAYS_NAMES = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const INITIAL_DAY_INDEX = 2;
const INITIAL_YEAR = 1919;
const FIRST_SPECIAL_YEAR = 1920;

const getMonthLength = (monthNum, year) => {
    const monthIndex = monthNum - 1;

    if (monthIndex === FEBRUARY_IND) {
        return MONTHS_LENGTHS[FEBRUARY_IND] + (year % 4 ? 0 : 1);
    }

    return MONTHS_LENGTHS[monthIndex];
};

const getDaysNamesView = () => DAYS_NAMES.map(day => day.toUpperCase()).join(' ');
const getCalendarHeadView = (monthNum, year) => `${MONTHS_NAMES[monthNum - 1].toUpperCase()} ${year}`;
const getDayView = day => day > 9 ? day : ` ${day}`;
const getOffsetView = startDayIndex => (startDayIndex % 7 !== 0) ? '\n ' + '   '.repeat(startDayIndex) : '';

const isYearSpecial = year => year % 4 === 0;

const getFirstDayIndex = (monthNum, year) => {
    const monthInd = monthNum - 1;

    const yearsOffsetInDays = (year - INITIAL_YEAR) * 365;

    const monthsOffsetInDays =
        GRADUAL_MONTHS_OFFSET[monthInd] +
        (isYearSpecial(year) && monthInd > FEBRUARY_IND ? 1 : 0);

    const additionalDays = Math.floor((year - 1 - FIRST_SPECIAL_YEAR) / 4) + 1;

    const dayIndex = (
        INITIAL_DAY_INDEX +
        yearsOffsetInDays +
        monthsOffsetInDays +
        additionalDays
    ) % 7;

    return dayIndex;
};

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

const getCalendar = (month, year) => {
    if (year < 1919) return 'Year is too small';
    if (month < 1 || month > 12) return 'Incorrect month';

    const startDayIndex = getFirstDayIndex(month, year);
    const monthLength = getMonthLength(month, year);

    return getCalendarView(month, year, startDayIndex, monthLength);
};

console.log(getCalendar(4, 2020));
