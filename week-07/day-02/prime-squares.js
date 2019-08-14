'use strict';

const sectionList = document.querySelector('section');

for (let i = 1; i <= 100; i++) {
  let section = document.createElement('div');
  section.textContent = i;
  sectionList.appendChild(section);
}

const primeCheckerList = document.querySelectorAll('div');

const primeChecker = div => {
  let number = Number(div.textContent);
  div.className = 'prime';
  if (number < 2) {
    div.className = 'not-prime';
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) div.className = 'not-prime';
  }
};

let counter = 0;
function asd() {
  if (counter >= primeCheckerList.length) {
    clearInterval(dsa);
    return;
  }
  primeChecker(primeCheckerList[counter]);
  counter++;
}

const dsa = setInterval(asd, 100);
