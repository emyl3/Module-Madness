//converts the accepted number into a USD value
function conversion(number){
  console.log('number from usd', number);
  return '$' + number.toFixed(2);
}

module.exports = conversion;
