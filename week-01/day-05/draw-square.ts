'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 0; i <= lineCount; i++) {
    if (i === 0 || i == lineCount) {
        console.log(Array(lineCount + 1).join('%'))
    } else {
        console.log('%' + Array(lineCount - 1).join(' ') + '%')
    }
}