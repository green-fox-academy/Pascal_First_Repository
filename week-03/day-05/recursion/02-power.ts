"use strict";

function powerNEasy(x: number, y: number) {
  return x ** y;
}

//console.log(powerNEasy(3, 2));

function powerN(x: number, y: number) {
  let baseNumber: number = x;
  let num: number = baseNumber;
  let power: number = y;
  if (num === baseNumber ** power) {
    return 0;
  } else if (baseNumber >= 1 && power >= 1) {
    let newNum: number = x * num;
    num = x * powerN(newNum, power);
  }
}

console.log(powerN(3, 2));
