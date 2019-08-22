'use strict';

function listCounter() {
  let listOne = document.body.querySelectorAll('li');
  let result = listOne.length;
  document.querySelector('p').textContent = `${result}`;
}

document.querySelector('button').onclick = listCounter;
