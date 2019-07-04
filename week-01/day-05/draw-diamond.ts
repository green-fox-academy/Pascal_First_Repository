'use strict';


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

let lineCount: number = 7;
let i: number = 0

if (lineCount % 2 !== 0) {

    while (i < lineCount) {

        if (i < (lineCount + 1) / 2) {

            let starNumber: number = (2 * i + 1);
            let spaceNumber: number = (((lineCount + 1) / 2) + i - starNumber);
            console.log(Array(spaceNumber + 1).join(" ") + Array(starNumber + 1).join("*"));

        } else if (i >= (lineCount + 1) / 2) {

            let spaceNumber: number = ((i - ((lineCount + 1) / 2)) + 1);
            let starNumber: number = ((lineCount + 1) - (i - (((lineCount + 1) / 2) - 2)) - spaceNumber);
            console.log(Array(spaceNumber + 1).join(" ") + Array(starNumber + 1).join("*"));
        }
        i++
    }
}