'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvasWidth = 800;
let canvasHeight = 800;

let z: number = canvasHeight = canvasWidth = 800;
let numberOf: number = 1;



function drawGrid(a, b, c, d) {
    ctx.beginPath();
    ctx.moveTo(a, b);
    ctx.lineTo(c, d);
    ctx.stroke();
}

/* 
function drawGridTop(a, b, c, d) {
    ctx.beginPath();
    ctx.moveTo(a, b);
    ctx.lineTo(c, d);
    ctx.stroke();
} 
*/

let x: number;
let y: number;

for (x = z - (z / numberOf); x <= z; x += 20) {
    for (y = z - (z / numberOf); y <= z; y += 20) { }
    if (x === 0) {
        ctx.strokeStyle = 'green';
        drawGrid(x, y, y, z);
    } if (y === 0) {
        ctx.strokeStyle = 'red';
        drawGrid(x, y, z, x);
    }
}


/*
for (x = 0; x <= z; x += 20) {
    for (y = 0; y <= z; y += 20) {
       if (x === 0) {
            ctx.strokeStyle = 'green';
            drawGrid(x, y, y / 2, canvasWidth / 2);
        } if (y === 0) {
            ctx.strokeStyle = 'red';
            drawGrid(x, y, canvasHeight / 2, x / 2);
        }  if (x === z / 2 && z / 2 < y) {
            ctx.strokeStyle = 'green';
            drawGrid(x, y, y, z);
        } if (y === z / 2 && z / 2 < x) {
            ctx.strokeStyle = 'red';
            drawGrid(x, y, z, x);
        } if (y === 0) {
            ctx.strokeStyle = 'red';
            drawGrid(x + z / 2, y, z, x);
        } if (x == z / 2 && y < z / 2) {
            ctx.strokeStyle = 'green';
            drawGrid(x, y, x, z)
        }


    }
}
*/