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
//make a number
function stringToArray(str) {
    return str.split(' ')
}

//tests
output.strToArrLog(stringToArray(inputString))
