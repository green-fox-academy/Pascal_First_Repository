// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

'use strict';

let candyList = 0;
let lollipopList = 0;
let amount = Math.floor(lollipopList / 10);

document.querySelector('.create-candies').addEventListener('click', function() {
  candyList += 10;
  document.querySelector('.candies').textContent = `${candyList}`;
});

document.querySelector('.buy-lollypops').addEventListener('click', function() {
  if (candyList >= 10) {
    candyList -= 10;
    lollipopList++;
    document.querySelector('.candies').textContent = `${candyList}`;
    document.querySelector('.lollypops').textContent = `${lollipopList}`;
    document.querySelector('.speed').textContent = `${amount}`;
  }
});

document.querySelector('.candy-machine').addEventListener('click', function() {
  amount *= 10;
  document.querySelector('.candies').textContent = `${candyList}`;
  document.querySelector('.lollypops').textContent = `${lollipopList}`;
  document.querySelector('.speed').textContent = `${amount}`;
});

if (lollipopList >= 10) {
  setInterval(function() {
    candyList += amount;
    document.querySelector('.candies').textContent = `${candyList}`;
    document.querySelector('.lollypops').textContent = `${lollipopList}`;
    document.querySelector('.speed').textContent = `${amount}`;
  }, 1000);
}
