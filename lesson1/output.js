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

module.exports.strToArrLog = strToArrLog;
