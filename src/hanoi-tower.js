const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};
  obj.turns = Math.pow(2, disksNumber) - 1;
  obj.seconds = obj.turns * 3600 / turnsSpeed;
  obj.seconds = Math.floor(obj.seconds);
  return obj;
};
