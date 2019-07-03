'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

for (let a: number = 0; a < 600; a += 60) {
    ctx.strokeStyle = 'black';
    ctx.fillRect(a, 0, 30, 30);
    ctx.fillRect(a + 30, 30, 30, 30);
}

//for (let a: number = 0; a < 600; a += 60) {
//    ctx.strokeStyle = 'black';
//    ctx.fillRect(a + 30, 30, 30, 30);
//}
