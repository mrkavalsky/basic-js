const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value = '( )') {
    if(value == '( )') this.arr.push(`~${value}~`);
    else this.arr.push(`~( ${value} )~`);
    return this;
  },
  removeLink(position) {
    if( !(typeof position == 'number') ) {
      this.arr = [];
      throw new Error();
    };
    if( !(Number.isInteger(position) ) ) {
      this.arr = [];
      throw new Error();
    };
    let i = position - 1;
    if(i >= this.arr.length || i < 0) {
      this.arr = [];
      throw new Error();
    } else this.arr.splice(i, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.join('');
    strLength = str.length;
    res = str.slice(1, strLength - 1);
    this.arr = [];
    return res;
  }
};

module.exports = chainMaker;