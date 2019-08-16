'use strict';

let counter = 9;

function timer() {
  if (counter === 0) {
    document.body.querySelector('.display').textContent = 'Bomb exploded';
  } else {
    document.body.querySelector('.display').textContent = counter;
    counter--;
  }
}
let countdown = setInterval(timer, 1000);

function defuse() {
  clearInterval(countdown);
}
