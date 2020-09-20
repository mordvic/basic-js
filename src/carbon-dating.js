const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


/**
 * 
 * @param {String} value 
 */
module.exports = function dateSample(value) {
  if (typeof (value) === 'string' && (value > 0 && value < MODERN_ACTIVITY) && value != undefined) {
    let result = Math.ceil(Math.log(MODERN_ACTIVITY / value) * HALF_LIFE_PERIOD / 0.693);
    return result;
  }

  return false;
};

// console.log(dateSample(3));