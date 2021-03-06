const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error();
  let transform = [];
  let l = arr.length;
  for(let i = 0; i < l; i++){
    switch (arr[i]) {
      case '--discard-next':
        if( i + 1 ==  l ) break;
        i += 1;
        break;
      case '--discard-prev':
        if( i - 1 == -1) break;
        if( arr[i - 2] ==  '--discard-next') break;
        transform.pop();
        break;
      case '--double-next':
        if( i + 1 ==  l ) break;
        transform.push( arr[i + 1] );
        break;
      case '--double-prev':
        if( i - 1 == -1 ) break;
        if( arr[i - 2] ==  '--discard-next') break;
        transform.push( arr[i - 1] );
        break;
      default: transform.push(arr[i]);
    };
  };
  return transform;
};
