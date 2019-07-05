'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvasWidth = 800;
let canvasHeight = 800;


function drawGrid(a, b, c, d) {
    ctx.beginPath();
    ctx.moveTo(a, b);
    ctx.lineTo(c, d);
    ctx.stroke();
}

let x: number;
let y: number;


for (x = 0; x <= canvasWidth; x += 20) {
    for (y = 0; y <= canvasHeight; y += 20) {
        if (x === 0) {
            ctx.strokeStyle = 'green';
            drawGrid(x, y, y, canvasWidth);
        } if (y === 0) {
            ctx.strokeStyle = 'red';
            drawGrid(x, y, canvasHeight, x);
        }
    }
}
