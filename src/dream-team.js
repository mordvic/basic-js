const CustomError = require("../extensions/custom-error");

/**
 *
 * @param {Array} arr
 */
module.exports = function createDreamTeam(arr) {

  if (!Array.isArray(arr)) {
    return false;
  }

  let dreamTeam = arr.map((item) => {
    if (typeof (item) == 'string') {
      return item.trim().slice(0, 1).toUpperCase();
    }
  });

  return dreamTeam.sort().join("");
}