const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  

  calculateDepth( arr ) {
    let count = 1;

    if( arr.some( {} = (item) => Array.isArray(item)) ) {
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if ( Array.isArray(arr[i]) ) {
          newArr = newArr.concat(arr[i]);
        };
      };
      count = count + this.calculateDepth(newArr);
    }
   
    return count;
  }
};