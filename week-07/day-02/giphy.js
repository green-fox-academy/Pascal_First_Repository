'use strict';

function deleting(page) {
  if (page.length !== 0) {
    while (page.firstChild) {
      page.removeChild(page.firstChild);
    }
  }
}

function display(x) {
  let page = document.querySelector('div');
  deleting(page);
  for (let i = 0; i < x.length; i++) {
    let element = document.createElement('img');
    element.src = x[i].images.original_still.url;
    element.style.height = '100px';
    element.style.width = '100px';
    element.className = x[i].images.downsized.url;
    page.appendChild(element);
  }
}
const xhr = new XMLHttpRequest();

document.querySelector('.button').addEventListener('click', e => {
  e.preventDefault();
  xhr.onload = function() {
    let myData = JSON.parse(xhr.responseText);
    display(myData.data);
    console.log(myData);
  };
  let search = document.body.querySelector('input').value;
  xhr.open(
    'GET',
    `https://api.giphy.com/v1/gifs/search?api_key=IcQpOHyvbeWUkfW5DbFMSriDoSTSNYef&q=${search}&limit=16&offset=0&rating=G&lang=en`
  );
  xhr.send();
});

document.querySelector('.content').addEventListener('click', element => {
  document.querySelector('.temp').src = element.target.className;
});
