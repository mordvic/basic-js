const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${String(value)} )`);
    return this;
  },

  removeLink(position) {
    if (isNaN(position) || typeof this.chain[position - 1] === "underfind") {
      this.chain = [];
      throw new Error();
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    let resChain = this.chain.join("~~");
    this.chain = [];
    return resChain;
  },
};

module.exports = chainMaker;
