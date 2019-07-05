'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

let numberOfLines: number = 14;
let numberOfDivides: number = 4;
// only works when width = heigth
let canvasSize: number = canvas.width / (numberOfDivides / 2);
let step: number = canvasSize / numberOfLines;


function drawBottom(x: number, y: number) {
    for (let i: number = 1; i <= numberOfLines; i++) {
        ctx.beginPath();
        ctx.moveTo(x, y + canvasSize + (i - 1) * step);
        ctx.lineTo(x + step * i, y + canvasSize)
        ctx.stroke();
    }
}

function drawTop(x: number, y: number) {
    for (let i: number = 1; i <= numberOfLines; i++) {
        ctx.beginPath();
        ctx.moveTo(x + canvasSize + (i - 1) * step, y);
        ctx.lineTo(x + canvasSize, y + step * i);
        ctx.stroke();
    }
}

for (let i: number = 0; i < numberOfDivides; i++) {
    for (let j: number = 0; j < numberOfDivides; j++) {
        drawBottom(i * canvasSize, j * canvasSize);
    }
}

for (let i: number = 0; i < numberOfDivides; i++) {
    for (let j: number = 0; j < numberOfDivides; j++) {
        drawTop(i * canvasSize, j * canvasSize);
    }
}
