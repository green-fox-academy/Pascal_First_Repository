'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

let transX = canvas.width * 0.5,
    transY = canvas.height * 0.5;

ctx.translate(transX, transY);


//let numberOfLines: number = 14;
let canvasWidth: number = canvas.width / 2;
//let canvasHeigth: number = canvas.height / 2;
//let stepX: number = canvasWidth / numberOfLines;
//let stepY: number = canvasHeigth / numberOfLines;

let x: number;
let y: number;
let step: number = 15;

function draw(a: number, b: number) {
    ctx.beginPath();
    ctx.moveTo(a, 0);
    ctx.lineTo(0, b);
    ctx.stroke();
}

for (let i = -canvasWidth - 1; i <= canvasWidth; i += step) {
    if (i < 0) {
        draw(i, -canvasWidth - i);
        draw(i, canvasWidth + i);
    } else {
        draw(i, -canvasWidth + i);
        draw(i, canvasWidth - i);
    }
}