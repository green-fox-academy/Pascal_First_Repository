'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

let canvasWidth = 600;
let canvasHeight = 400;

ctx.fillRect(0, 0, canvasWidth, canvasHeight);


for (let stars: number = 0; stars < 240; stars++) {
    let x: number = Math.floor(Math.random() * canvasWidth);
    let y: number = Math.floor(Math.random() * canvasHeight);
    let color = Math.floor(Math.random() * 100)
    ctx.fillStyle = `hsl(0, 0%, ${color}%)`
    ctx.fillRect(x, y, 5, 5);
    ctx.stroke();
}

