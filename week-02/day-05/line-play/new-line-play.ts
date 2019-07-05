'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

let numberOfLines: number = 80;
let step: number = canvas.height / numberOfLines;

function drawGrid(a: number, colorA: string, colorB: string) {
    ctx.beginPath();
    ctx.strokeStyle = colorA;
    ctx.moveTo(a, 0);
    ctx.lineTo(a, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = colorB;
    ctx.moveTo(0, a);
    ctx.lineTo(canvas.width, a);
    ctx.stroke();
}

for (let i: number = 0; i < canvas.height; i += step) {
    drawGrid(i, 'green', 'red');
}

let transX = canvas.width * 0.5,
    transY = canvas.height * 0.5;

ctx.translate(transX, transY);

ctx.fillRect(-50, -50, 100, 100)
ctx.rotate(45 * Math.PI / 180);
ctx.fillStyle = 'black';
ctx.stroke()