const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  count = 1;
  maxCount = 1;

  calculateDepth( arr ) {
    for (let i = 0; i < arr.length; i++) {
      if ( Array.isArray( arr[i] ) ) {
        this.count++;
        this.calculateDepth(arr[i]);
        if(this.count > this.maxCount) {this.maxCount = this.count;}
        this.count--;
      };
    };
    return this.maxCount;
  }
};