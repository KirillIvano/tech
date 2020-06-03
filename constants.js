const {getGradualSumArray} = require('./util/getGradualSumArray');

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

module.exports = {
    FEBRUARY_IND,
    MONTHS_LENGTHS,
    GRADUAL_MONTHS_OFFSET,
    MONTHS_NAMES,
    DAYS_NAMES,
    INITIAL_DAY_INDEX,
    INITIAL_YEAR,
    FIRST_SPECIAL_YEAR,
};
