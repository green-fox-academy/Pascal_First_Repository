'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

const myCanvasWidth = 600;
const myCanvasHeigth = 400;

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(295, 195);
ctx.lineTo(305, 195);
ctx.lineTo(305, 205);
ctx.lineTo(295, 205);
ctx.closePath();
ctx.stroke();


