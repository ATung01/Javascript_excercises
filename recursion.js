function factor(number) {
  var result = 1;
  var count;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return result;
};
console.log(factor(7));



var factorial = function(number) {
  if (number <= 1) { 
    return 1;
  }
  else {
    return (number * factorial(number - 1));
  }
};
console.log(factorial(7));
