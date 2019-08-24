let movies = [
  { title: 'Moon', genre: 'Sci-fi' },
  { title: '2001: A Space Odyssey', genre: 'Sci-fi' },
  { title: 'Contact', genre: 'Sci-fi' },
  { title: 'Darkest Hour', genre: 'Drama' },
  { title: 'There Will Be Blood', genre: 'Drama' },
  { title: 'American Beauty', genre: 'Drama' },
  { title: 'Airplane!', genre: 'Comedy' },
  { title: 'Deadpool', genre: 'Comedy' },
  { title: "Wayne's World", genre: 'Comedy' }
];

function filterMovies() {
  let list = document.querySelector("[name='movie']");
  if (list.length > 1) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
  let filtered = document.querySelector("[name='genre']").value;
  let tempArray = movies.filter(function(element) {
    if (element.genre === filtered) {
      return element;
    }
  });
  for (let i = 0; i < tempArray.length; i++) {
    let element = document.createElement('option');
    element.className = filtered;
    element.textContent = tempArray[i].title;
    list.appendChild(element);
  }
}

function getName() {
  document.querySelector('.answer').textContent = document.querySelector(
    "[name='movie']"
  ).value;
}

document
  .querySelector("[name='genre']")
  .addEventListener('change', filterMovies);

document.querySelector("[name='movie']").addEventListener('change', getName);
