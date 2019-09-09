'use strict';

let submit = document.body.querySelector('.button');

console.log(submit);

submit.addEventListener('click', e => {
  console.log(document.querySelector("input[id='category field']").value);
  const xhr = new XMLHttpRequest();
  e.preventDefault();
  let category = document.querySelector("input[id='category field']").value;
  let text = document.querySelector("input[id='text']").value;
  xhr.open('POST', '/home');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({ category: category, text: text }));
  console.log(category, text);
});
