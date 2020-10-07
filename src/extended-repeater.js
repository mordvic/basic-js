const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let res = '';
    let newOptions = options;

    if (!('separator' in newOptions)) {
        newOptions.separator = "+";
    }

    if (!('additionSeparator' in newOptions)) {
        newOptions.additionSeparator = "|";
    }

    if ('repeatTimes' in options && newOptions.repeatTimes === undefined) {
        newOptions.repeatTimes = 1;
    }

    if ("additionRepeatTimes" in options && newOptions.additionRepeatTimes === undefined) {
        newOptions.additionRepeatTimes = 1;
    }

    for (let i = 0; i < newOptions.repeatTimes; i++) {
        res += str;

        for (let j = 0; j < newOptions.additionRepeatTimes; j++) {
            res += (j === newOptions.additionRepeatTimes - 1) ? newOptions.addition : newOptions.addition + newOptions.additionSeparator;
        }
        res += (i === newOptions.repeatTimes - 1) ? "" : newOptions.separator;

    }
    return res;
};