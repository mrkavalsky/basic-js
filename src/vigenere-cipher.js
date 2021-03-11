const CustomError = require("../extensions/custom-error");

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const table = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                  'BCDEFGHIJKLMNOPQRSTUVWXYZA',
                  'CDEFGHIJKLMNOPQRSTUVWXYZAB',
                  'DEFGHIJKLMNOPQRSTUVWXYZABC',
                  'EFGHIJKLMNOPQRSTUVWXYZABCD',
                  'FGHIJKLMNOPQRSTUVWXYZABCDE',
                  'GHIJKLMNOPQRSTUVWXYZABCDEF',
                  'HIJKLMNOPQRSTUVWXYZABCDEFG',
                  'IJKLMNOPQRSTUVWXYZABCDEFGH',
                  'JKLMNOPQRSTUVWXYZABCDEFGHI',
                  'KLMNOPQRSTUVWXYZABCDEFGHIJ',
                  'LMNOPQRSTUVWXYZABCDEFGHIJK',
                  'MNOPQRSTUVWXYZABCDEFGHIJKL',
                  'NOPQRSTUVWXYZABCDEFGHIJKLM',
                  'OPQRSTUVWXYZABCDEFGHIJKLMN',
                  'PQRSTUVWXYZABCDEFGHIJKLMNO',
                  'QRSTUVWXYZABCDEFGHIJKLMNOP',
                  'RSTUVWXYZABCDEFGHIJKLMNOPQ',
                  'STUVWXYZABCDEFGHIJKLMNOPQR',
                  'TUVWXYZABCDEFGHIJKLMNOPQRS',
                  'UVWXYZABCDEFGHIJKLMNOPQRST',
                  'VWXYZABCDEFGHIJKLMNOPQRSTU',
                  'WXYZABCDEFGHIJKLMNOPQRSTUV',
                  'XYZABCDEFGHIJKLMNOPQRSTUVW',
                  'YZABCDEFGHIJKLMNOPQRSTUVWX',
                  'ZABCDEFGHIJKLMNOPQRSTUVWXY'];

class VigenereCipheringMachine {            

  constructor(mod) {
    this.mod = mod;
  }

  encrypt(str, key) {

    if(str === undefined || key === undefined) throw new Error();

    let res = [];
    let arrStr = [];
    let arrKey = [];
    let finishRes = [];

    str = str.toUpperCase();
    key = key.toUpperCase();

    let num = 1;

    for(let i = 0; i < str.length; i++) {
      if( str.codePointAt(i) >= 65 && str.codePointAt(i) <= 90 ) {
        arrStr.push(str[i]);
      };
    };

    if(arrStr.length > key.length) {
      num = arrStr.length / key.length;
      num = Math.ceil(num);
      key = key.repeat(num);
      key = key.slice(0, arrStr.length);
    };
    if(arrStr.length < key.length) {
      key = key.slice(0, arrStr.length);
    };
    
    arrKey = key.split('');

    for(let i = 0; i < arrStr.length; i++) {
      let m = alpha.indexOf( arrStr [i] );
      let n = alpha.indexOf( arrKey[i] );
      res.push( table[m][n] );
    };

    let j = 0;

    for(let i = 0; i < str.length; i++) {
      if( str.codePointAt(i) >= 65 && str.codePointAt(i) <= 90 ) {
        finishRes.push(res[j]);
        j++;
      } else finishRes.push(str[i]);
    };

    if( this.mod === false ) {  
      finishRes.reverse();
    }

    return finishRes.join('');
    
  }    

  decrypt(str, key) {
    
    if(str === undefined || key === undefined) throw new Error();

  }
}

module.exports = VigenereCipheringMachine;
