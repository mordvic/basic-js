const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const DISCARD_NEXT = "--discard-next";
  const DISCARD_PREV = "--discard-prev";
  const DOUBLE_NEXT = "--double-next";
  const DOUBLE_PREV = "--double-prev";

  let newArr = [];

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === DISCARD_NEXT) {
        i++;
      } else if (arr[i] === DISCARD_PREV) {
        if (arr[i - 2] !== DISCARD_NEXT && i !== 0) {
          newArr.pop(arr[i - 1]);
        }
      } else if (arr[i] === DOUBLE_NEXT) {
        if (i < arr.length - 1) {
          newArr.push(arr[i + 1]);
        }
      } else if (arr[i] === DOUBLE_PREV) {
        if (i - 1 >= 0 && arr[i - 2] !== DISCARD_NEXT) {
          newArr.push(arr[i - 1]);
        }
      } else newArr.push(arr[i]);
    }
  } else throw new Error();

  return newArr;
};
