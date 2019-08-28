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
  for (let i = 0; i < x.length; i++) {
    let element = document.createElement('li');
    element.textContent = x[i].name;
    element.className = i;
    page.appendChild(element);
  }
}

const xhr = new XMLHttpRequest();
let tempArray = [];

document.querySelector('.button').addEventListener('click', e => {
  e.preventDefault();
  xhr.onload = function() {
    let myData = JSON.parse(xhr.responseText);
    display(myData.results);
    console.log(myData.results);
    return (tempArray = myData.results);
  };
  let search = document.body.querySelector('input').value;
  xhr.open('GET', `https://swapi.co/api/people/?search=${search}`);
  xhr.send();
});

document.querySelector('.characters').addEventListener('click', e => {
  let page = document.querySelector('.movies');
  let index = e.target.className;
  deleting(page);
  for (let i = 0; i < x.length; i++) {
    let element = document.createElement('li');
    element.textContent = x[i].name;
    element.className = i;
    page.appendChild(element);
  }
  e.target;
});
