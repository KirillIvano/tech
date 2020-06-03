const getGradualSumArray = arr => {
    const arrayCopy = [...arr];

    let sum = 0;
    for (const ind in arr) {
        arrayCopy[ind] = sum;
        sum += arr[ind];
    }

    return arrayCopy;
};

module.exports = {
    getGradualSumArray,
};
