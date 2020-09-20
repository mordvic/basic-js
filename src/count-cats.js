const CustomError = require("../extensions/custom-error");

/**
 * 
 * @param {Array} matrixArr 
 */
module.exports = function countCats(matrixArr) {
  let catValue = '^^';

  return matrixArr.reduce((init, item) => {
    return init + item.reduce((accum, value) => {
      if (value === catValue) {
        return ++accum;
      } else return accum;
    }, 0)
  }, 0)
};