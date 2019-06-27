// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3


let input: number = 5;
let sum: number = 0;
let average: number;

for (let a = 1; a <= input; a++) { // a++  =  a=a+1
    // sum = sum + a;
    sum += a
}

average = sum / input

console.log(sum);
console.log(average);