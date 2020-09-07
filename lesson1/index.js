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
//String to array
function stringToArray(string) {
    return string
}

//tests
output(stringToArray(inputString))
