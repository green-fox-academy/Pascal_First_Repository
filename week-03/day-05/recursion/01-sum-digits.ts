"use strict";

function SumDigits(n: number) {
  let remainder: number = n % 10;
  let sum: number = remainder;
  if (n >= 10) {
    let rest = Math.floor(n / 10);
    sum += SumDigits(rest);
  } else {
  }
  return sum;
}

console.log(SumDigits(1234));
