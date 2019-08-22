'use strict';

const log = document.querySelector('h1');
document.body.addEventListener('keyup', logKey);

function logKey(e) {
  log.textContent = `Last pressed key code is:  ${e.keyCode} `;
  console.log(e);
}
