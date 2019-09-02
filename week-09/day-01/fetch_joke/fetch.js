let button = document.querySelector('button');

function display(x) {
  let page = document.querySelector('.container');
  let element = document.createElement('div');
  element.textContent = x;
  element.style.margin = '5px';
  page.appendChild(element);
}

function fetchJoke() {}

button.addEventListener('click', e => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.icndb.com/jokes/random');
    xhr.onload = resolve(function() {
      let myData = JSON.parse(xhr.responseText);
      console.log(myData);
      display(myData.value.joke);
    });
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
});
