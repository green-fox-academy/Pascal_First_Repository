"use strict";

function numberAdder(n: number) {
  for (let i = 1; i <= n; i++) {
    if (i === n) {
      return i;
    } else {
      console.log(i);
    }
  }
}

console.log(numberAdder(10));
