'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const canvasWidth = 600;
const canvasHeigth = 400;

function calcColor(min, max, val) {
  let minHue = 240,
    maxHue = 0;
  let curPercent = (val - min) / (max - min);
  let colorS =
    'hsl(' + (curPercent * (maxHue - minHue) + minHue) + ', 100%, 50%)';
  return colorS;
}

for (let i = 400; i > 0; i -= 10) {
  ctx.fillStyle = calcColor(240, 0, i);
  ctx.fillRect(canvasWidth / 2 - i / 2, canvasHeigth / 2 - i / 2, i, i);
}
