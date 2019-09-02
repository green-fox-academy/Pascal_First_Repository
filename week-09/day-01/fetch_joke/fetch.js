let button = document.querySelector('button');

function display(x) {
  let page = document.querySelector('.container');
  let element = document.createElement('div');
  element.textContent = x;
  element.style.margin = '5px';
  page.appendChild(element);
}

function fetchJoke() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.icndb.com/jokes/random');
    xhr.onload = function() {
      let myData = JSON.parse(xhr.responseText);
      console.log(myData);
      display(myData.value.joke);
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

//button.addEventListener('click', fetchJoke);

function newFetch() {
  const url = 'http://api.icndb.com/jokes/random';
  fetch(url)
    .then(response => response.json())
    .then(parsedResponse => {
      console.log(parsedResponse);
      display(parsedResponse.value.joke);
    })
    .catch(error => console.log('error: ', error));
}

button.addEventListener('click', newFetch);
