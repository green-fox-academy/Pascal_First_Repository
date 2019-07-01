'use strict'

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let lengthOf: number = 10;
let sumArr: number[] = [];

for (let i = 0; i <= lengthOf; i++) {
    sumArr.push(i);
}

console.log(sumArr.reduce(function (a: number, b: number) {
    return a + b
}))

