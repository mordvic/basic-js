const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(mode = true) {
    this.mode = mode;
  }

  checkLengthOfKey(msg, key) {

    while (msg.length > key.length) {
      key += key;
    }
    return key;
  }

  /**
   * 
   * @param {String} msg 
   * @param {String} key 
   * @param {Boolean} mode 
   * @param {Function} charFn 
   */
  processMessage(msg, key, charFn) {
    if (typeof msg === 'undefined' || typeof key === 'undefined') {
      throw new Error();
    }

    let index = 0;
    let result = [];
    let keyCode = this.checkLengthOfKey(msg, key);

    for (let i = 0; i < msg.length; i++) {
      if (/[a-zA-Z]/.test(msg[i])) {
        result.push(charFn(
          msg[i].toUpperCase().charCodeAt(0),
          keyCode[index++].toUpperCase().charCodeAt(0)
        ));
      } else result.push(msg[i]);
    }

    if (this.mode === false) {
      return result.reverse().join('');
    }

    return result.join('');
  }

  encrypt(msg, key) {
    return this.processMessage(msg, key, (msgChar, keyChar) => {
      return String.fromCharCode((msgChar + keyChar) % 26 + 65);
    });
  }


  decrypt(msg, key) {
    return this.processMessage(msg, key, (msgChar, keyChar) => {
      return String.fromCharCode((msgChar + 26 - keyChar) % 26 + 65);
    });
  }
}

module.exports = VigenereCipheringMachine;