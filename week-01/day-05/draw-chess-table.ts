'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineCount: number = 6;
let x: number = 4;
x = x + 1;

for (let i: number = 1; i <= lineCount; i++) {
    if (i % 2 === 1) {
        console.log(Array(x).join('% '));
    } else if (i % 2 === 0) {
        console.log(Array(x).join(' %'));
    }
}

