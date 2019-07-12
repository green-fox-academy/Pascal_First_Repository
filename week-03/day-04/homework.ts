"use strict";

var factor = function(number) {
  var result = 1;
  var count;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return result;
};
console.log(factor(4));

//
console.log("---------");
//

var counter = 3;
while (counter > 0) {
  console.log(counter--);
}

//
console.log("---------");
//

var countdown = function(value) {
  if (value > 0) {
    console.log(value);
    return countdown(value - 1);
  } else {
    return value;
  }
};
countdown(4);

//
console.log("---------");
//

var factorial = function(number) {
  if (number <= 0) {
    // terminal case
    return 1;
  } else {
    // block to execute
    return number * factorial(number - 1);
  }
};
console.log(factorial(5));
