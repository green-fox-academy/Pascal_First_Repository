'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

/*
for (let i = 10; i < 300; i *= 2) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(i, i, i, i);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(i, i, i, i);
}
*/

for (let a = 0; a < 100; a++) {
    let squareNumber: number = 2 ** a
    ctx.fillStyle = 'purple';
    ctx.fillRect(squareNumber - 1, squareNumber - 1, squareNumber, squareNumber);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(squareNumber - 1, squareNumber - 1, squareNumber, squareNumber);
}

