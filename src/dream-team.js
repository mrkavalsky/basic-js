const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if( !(Array.isArray(members)) ) return false;
  let name = [];
  for(let i = 0; i < members.length; i++) {
    if(typeof members[i] == 'string') {
      let currentStr = members[i].trim();
      name.push( currentStr[0].toUpperCase() );
    };
  };
  name.sort();
  let str = name.join('');
  return str;
};
