const lodash = require('lodash');
const expectedArray = ['I', 'love', 'arrays', 'they', 'are', 'my', 'favorite'];

function strToArrLog(string) {
  console.log('***************************');
  console.log('String to array test: ' + lodash.isEqual(string, expectedArray));
  console.log('Your answer is: ' + string);
  console.log('Expected: ' + expectedArray);
  console.log('***************************');
  console.log();
}

function codePhraseLog(args) {
    let result = 'this is my ';
    typeof args[0] === 'number' ? result = result + 'p' :  result = result + 'w';
    typeof args[1] === 'string' ? result = result + 'r' :  result = result + 'e';
    typeof args[2] === 'object' ? result = result + 'o' :  result = result + 'b';
    typeof args[3] === 'boolean' ? result = result + 'g' :  result = result + 's';
    typeof args[4] === 'undefined' ? result = result + 'r' :  result = result + 'i';
    lodash.isNull(args[5]) ? result = result + 'a' :  result = result + 't';
    typeof args[6] === 'symbol' ? result = result + 'm' :  result = result + 'e';
    console.log('***************************');
    console.log(result);
    console.log('***************************');
    console.log();
  }

module.exports.codePhraseLog = codePhraseLog;
module.exports.strToArrLog = strToArrLog;
