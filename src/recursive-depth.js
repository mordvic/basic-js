const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;

    for (let element of arr) {
      let arrDepth = 1;
      if (Array.isArray(element)) {
        arrDepth += this.calculateDepth(element);
        if (arrDepth > count) {
          count = arrDepth;
        } else count = count;
      }

    }
    return count;
  }
};