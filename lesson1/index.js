//modules
const inputString = "I love arrays they are my favorite";
const output = require('./output')

//info
typeof 0; //number
typeof ''; //string
typeof {}; //object
typeof true; //boolean
typeof undefined; //undefined
typeof null; //object
typeof Symbol("foo"); //symbol

//functions
function codePhrase(...args) {
    output.codePhraseLog(args);
}

codePhrase('', {}, false, 0, null, undefined, '');
// codePhrase();

//make a number
// function stringToArray(str) {
//     return str
// }

//tests
// output.strToArrLog(stringToArray(inputString))
