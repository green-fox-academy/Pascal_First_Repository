"use strict";

export function fibo(n: number) {
  if (n <= 0) {
    return "You suck balls!";
  } else if (n == 1) {
    return 0;
  } else if (n == 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}

console.log(fibo(10));
