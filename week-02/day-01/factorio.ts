'use strict'

// -  Create a function called `factorio`
//    that returns it's input's factorial

let lengthOf: number = 5;
let newArr: number[] = [];

for (let i = 1; i <= lengthOf; i++) {
    newArr.push(i);
}

console.log(newArr.reduce(function (a: number, b: number) {
    return a * b
}))
