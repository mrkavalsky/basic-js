const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addRepStr = '';

  if( !(options.addition === undefined) ) {

    addRepStr = '' + options.addition;

    let additionSeparator = options.additionSeparator || '|';
    let addSepPlusStr = additionSeparator + addRepStr;

    for(let i = 1; i < options.additionRepeatTimes; i++) {
      addRepStr += addSepPlusStr;
    };
  }
    

  let string = '' + str + addRepStr;
  let separator = options.separator || '+';
  let sepPlusStr = separator + string;

  for(let j = 1; j < options.repeatTimes; j++) {
    string += sepPlusStr;
  };

  return string;
};
  