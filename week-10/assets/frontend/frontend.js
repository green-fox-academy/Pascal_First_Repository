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
