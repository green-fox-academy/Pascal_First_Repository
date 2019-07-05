'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

var transX = canvas.width * 0.5,
    transY = canvas.height * 0.5;

ctx.translate(transX, transY);


//let numberOfLines: number = 14;
let canvasWidth: number = canvas.width / 2;
//let canvasHeigth: number = canvas.height / 2;
//let stepX: number = canvasWidth / numberOfLines;
//let stepY: number = canvasHeigth / numberOfLines;

let x: number;

function draw(a, b) {
    for (let x = -canvasWidth; x <= 0; x += 10)
        ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(0, a);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(0, b);
    ctx.stroke();
}

for (let i: number = 0, i <canvasWidth; i += 10) {
    for (let j: number = 0; i > -canvasWidth; j -= 10) {
        draw(i, j);
    }
}