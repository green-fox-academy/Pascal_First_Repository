let list = ['apple', 'banana', 'cat', 'dog'];

document.body.querySelectorAll('li').forEach((el, index) => {
  el.textContent = list[index];
});

document.body.querySelector('ul').style.backgroundColor = 'limegreen';
