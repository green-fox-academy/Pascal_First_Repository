"use strict";

function powerNEasy(x: number, y: number) {
  return x ** y;
}

//console.log(powerNEasy(3, 2));

function powerN(x: number, y: number) {
  let baseNumber: number = x;
  let num: number = baseNumber;
  if (num == x ** y) {
    return 0;
  } else if (x >= 1 && y >= 1) {
    let newNum = x * num;
    num = x * powerN(newNum, y);
  }
}

console.log(powerN(3, 2));
