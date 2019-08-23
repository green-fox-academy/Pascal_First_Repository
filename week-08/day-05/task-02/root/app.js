`use strict`;

function enableButton() {
  let dog = document.body.querySelector("[id = 'dog']");
  let cat = document.body.querySelector("[id = 'cat']");
  if (cat.checked || dog.checked) {
    document.querySelector("[type='submit']").disabled = false;
  }
}

function enableSumbit() {
  let yes = document.body.querySelector("[id='yes']");
  if (yes.checked) {
    document.querySelector('button').disabled = false;
  } else {
    document.querySelector('button').disabled = true;
  }
}

let counter = 0;

function subscribe() {
  counter++;
}

function sumbitOnly() {
  let fish = document.body.querySelector("[id = 'fish']");
  let no = document.body.querySelector("[id='no']");
  if (fish.checked && no.checked) {
    document.querySelector("[type='submit']").disabled = false;
  }
}

function subMessage() {
  if (document.querySelectorAll('.message').length === 0) {
    if (counter !== 0) {
      let target = document.querySelector('.form');
      let message = document.createElement('p');
      message.style.fontSize = '10px';
      message.style.fontStyle = 'italic';
      message.style.alignSelf = 'center';
      message.className = 'message';
      message.textContent =
        "Thank you, you've successfully signed up for cat facts";
      target.appendChild(message);
    } else if (counter === 0) {
      let target = document.querySelector('.form');
      let message = document.createElement('p');
      message.style.fontSize = '10px';
      message.style.fontStyle = 'italic';
      message.style.alignSelf = 'center';
      message.className = 'message';
      message.textContent = 'Sigh, we still added you to the cat facts list';
      target.appendChild(message);
    }
  }
}

document.body
  .querySelector('.questions')
  .addEventListener('click', enableButton);

document.body.querySelector('.facts').addEventListener('click', enableSumbit);

document.querySelector('button').addEventListener('click', subscribe);

document.querySelector('.form').addEventListener('click', sumbitOnly);

document.querySelector("[type='submit']").addEventListener('click', subMessage);
