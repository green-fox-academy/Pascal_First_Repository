'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

const canvasWidth = 600;
const canvasHeigth = 400;

function centerBox(size: number) {
    ctx.strokeStyle = 'green';
    ctx.strokeRect(canvasWidth / 2 - size / 2, canvasHeigth / 2 - size / 2, size, size);
}

centerBox(50);
centerBox(100);
centerBox(150);

