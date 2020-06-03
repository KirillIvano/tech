const {
    FEBRUARY_IND,
    MONTHS_LENGTHS,
} = require('./../constants');

const getMonthLength = (monthNum, year) => {
    const monthIndex = monthNum - 1;

    if (monthIndex === FEBRUARY_IND) {
        return MONTHS_LENGTHS[FEBRUARY_IND] + (year % 4 ? 0 : 1);
    }

    return MONTHS_LENGTHS[monthIndex];
};

module.exports = {
    getMonthLength,
};
