const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if( !(typeof sampleActivity == 'string') ) return false;
  let num = Number(sampleActivity);
  let str = '' + num;
  if(num == NaN) return false;
  if( !(str == sampleActivity) ) return false;
  if(num > 15 || num <= 0) return false;
  let lnTwo = 0.693;
  let k = lnTwo / HALF_LIFE_PERIOD;
  let lnActivity = Math.log(MODERN_ACTIVITY / sampleActivity);
  let t = lnActivity / k;
  return Math.ceil(t);
};
