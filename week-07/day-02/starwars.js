'use strict';

function deleting(list) {
  if (list.length !== 0) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
}

function display(x) {
  let page = document.querySelector('.characters');
  deleting(page);
  for (let i = 0; i < 2; i++) {
    let element = document.createElement('li');
    element.textContent = 'temp';
    page.appendChild(element);
  }
}

const xhr = new XMLHttpRequest();

document.querySelector('.button').addEventListener('click', e => {
  e.preventDefault();
  xhr.onload = function() {
    let myData = JSON.parse(xhr.responseText);
    display(myData);
    console.log(myData);
  };
  let search = document.body.querySelector('input').value;
  xhr.open('GET', `https://swapi.co/api/people/?search=${search}`);
  xhr.send();
});
