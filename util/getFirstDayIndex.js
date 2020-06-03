const {
    FEBRUARY_IND,
    INITIAL_YEAR,
    INITIAL_DAY_INDEX,
    FIRST_SPECIAL_YEAR,
    GRADUAL_MONTHS_OFFSET,
} = require('./../constants');

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

module.exports = {
    getFirstDayIndex,
};
