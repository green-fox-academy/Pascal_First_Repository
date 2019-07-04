'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let canvasWidth = 600;
let canvasHeight = 400;

function calcColor(min, max, val) {
    let minHue = 240, maxHue = 0;
    let curPercent = (val - min) / (max - min);
    let color = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ", 100%, 50%)";
    return color;
}


function drawToCenter(a, b, c) {
    ctx.beginPath();
    ctx.strokeStyle = calcColor(240, 0, c);
    ctx.moveTo(a, b);
    ctx.lineTo(canvasWidth / 2, canvasHeight / 2);
    ctx.stroke();
}

let x: number;
let y: number;
let i: number = 0;

//let angle = 0;
//ctx.translate(canvasWidth / 2, canvasHeight / 2);
//function hackEyes(angle) {
//ctx.fillRect(0, 0, canvasWidth, canvasHeight);

for (x = 0; x <= 600; x += 20) {
    for (y = 0; y <= 400; y += 20) {
        if (x === 0 || x === 600) {
            // ctx.rotate(angle);
            drawToCenter(x, y, i);
            i += 10;
        } if (y === 0 || y === 400) {
            //ctx.rotate(angle);
            drawToCenter(x, y, i);
            i += 10;
        }
    }
}

/*
}
setTimeout(() => {
    angle += 0.002;
    hackEyes(angle)
}, 100);
}
for (i = 400; i > 0; i -= 1) {
}
hackEyes(1);
*/