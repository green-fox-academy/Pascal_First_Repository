'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function moveRectangle(x: number, y: number) {
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = 'black';

}

moveRectangle(50, 50);
moveRectangle(500, 300);
moveRectangle(300, 300);
moveRectangle(154, 178);


//for (let i: number = 0; i < 4; i++) {
//
//    let color: number = Math.floor(Math.random() * 255)
//    let x: number = Math.floor(Math.random() * (canvas.height / 2));
//    let y: number = Math.floor(Math.random() * (canvas.width / 2));
//    let a: number = Math.floor(Math.random() * (canvas.height / 2));
//    let b: number = Math.floor(Math.random() * (canvas.width / 2));
//
//    ctx.fillStyle = `rgb(${color}, ${255 - color}, ${color})`;
//    ctx.fillRect(x, y, a, b);
//};



