var number = require('./one');
var stringNumber = require('./two');
module.exports.moneyNumber = moneyString;
module.exports.words = printWords;



var random = number.modOne();

function printWords () {
   console.log ("Account balance: \n");
}

function moneyString () {
  var string = stringNumber.modTwo(random);
  console.log(string);
}
