document.querySelector('.infobarplus').addEventListener('click', () => {
  if (document.querySelector('input')) {
    return;
  } else {
    let form = document.createElement('div');
    let element = document.createElement('input');
    form.className = 'list';
    form.appendChild(element);
    document.querySelector('.playlists').appendChild(form);
    element.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 13:
          let text = element.value;
          form.removeChild(element);
          form.textContent = text;
          break;
      }
    });
  }
});

document.querySelector('.tracks').addEventListener('click', () => {
  document.querySelector('audio').src = event.target.getAttribute('data-url');
  document.querySelector('.albumimg').src = event.target.getAttribute(
    'data-artwork'
  );
  document.querySelector('h2').textContent =
    event.target.firstChild.textContent;
  document.querySelector('h3').textContent = event.target.getAttribute(
    'data-artist'
  );
  /* let audio = new Audio(event.target.getAttribute('data-url'));
  audio.src = event.target.getAttribute('data-url');
  audio.load();
  audio.play(); */
});
