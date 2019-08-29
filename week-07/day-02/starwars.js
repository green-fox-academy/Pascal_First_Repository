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
  let pageSecond = document.querySelector('.movies');
  deleting(page);
  deleting(pageSecond);
  for (let i = 0; i < x.length; i++) {
    let element = document.createElement('li');
    element.textContent = x[i].name;
    element.className = i;
    page.appendChild(element);
  }
}

let tempArray = [];

document.querySelector('.button').addEventListener('click', e => {
  const xhr = new XMLHttpRequest();
  e.preventDefault();
  xhr.onload = function() {
    let myData = JSON.parse(xhr.responseText);
    display(myData.results);
    return (tempArray = myData.results);
  };
  let search = document.body.querySelector('input').value;
  xhr.open('GET', `https://swapi.co/api/people/?search=${search}`);
  xhr.send();
});

document.querySelector('.characters').addEventListener('click', e => {
  let page = document.querySelector('.movies');
  let index = e.target.className;
  let arrayToUse = tempArray[index].films;
  deleting(page);
  for (let i = 0; i < arrayToUse.length; i++) {
    const xhr = new XMLHttpRequest();
    e.preventDefault();
    xhr.onload = function() {
      let myData = JSON.parse(xhr.responseText);
      let element = document.createElement('li');
      element.textContent = `${myData.title} (${myData.release_date})`;
      page.appendChild(element);
    };
    let search = document.body.querySelector('input').value;
    xhr.open('GET', `${arrayToUse[i]}`);
    xhr.send();
  }
  e.target;
});
