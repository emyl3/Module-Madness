//takes the modules from randomNum.js and usd.js
var randomNumber = require('./randomNum');
var usdConversion = require('./usd');

//takes the random number generated and changes into a USD value
exports.combine = function(){
  return usdConversion((randomNumber(100, 1000000)));
};

//prints the text account balance followed by a new line
exports.result = function(){
  return 'Account balance: \n';
};
