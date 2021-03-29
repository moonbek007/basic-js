const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: "",
  getLength() {
    return this.chain.split("~~").length();
  },
  addLink(value) {
    if (this.chain.length === 0) {
      this.chain = ` ( ${value} )`;
    } else {
      this.chain += `~~( ${value} ) `;
    }
  },
  removeLink(position) {
    let tempArray = this.chain.split("~~");
    if (position < 0 || position >= tempArray.length) {
      throw new Error();
    }
    tempArray.splice(position, 1);
    this.chain = tempArray.join("~~");
  },
  reverseChain() {
    let tempArray = this.chain.split("~~");
    let newChainArray = [];
    for (let i = tempArray.length - 1; i >= 0; i--) {
      newChainArray.push(tempArray[i]);
    }
    this.chain = newChainArray.join("~~");
  },
  finishChain() {
    const answer = this.chain;
    this.chain = "";
    return answer;
  },
};

module.exports = chainMaker;
