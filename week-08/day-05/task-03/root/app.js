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

let filtered = document.querySelector("[name='genre']").value;
function isGood(value) {
  if (value.genre === filtered) {
    return value;
  }
}

function filterMovies() {
  console.log(filtered);
  let tempArray = movies.filter(isGood);
  console.log(tempArray);
  for (let i = 0; i < tempArray.length; i++) {
    let list = document.querySelector("[name='movie']");
    let element = document.createElement('option');
    element.className = filtered;
    element.textContent = tempArray[i].title;
    list.appendChild(element);
  }
}

document
  .querySelector("[name='genre']")
  .addEventListener('click', filterMovies);
