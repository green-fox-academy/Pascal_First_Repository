'use strict';

// let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lineCount2: number = 10;

for (let i: number = 0; i < lineCount2; i++) {
    let numOfStars: number = 2 * i + 1;
    let numOfSpaces: number = lineCount2 + i - numOfStars;
    
   // for ();

    console.log(Array(numOfSpaces + 1).join(' ') + Array(numOfStars + 1).join('*'));
}