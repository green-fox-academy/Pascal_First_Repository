const last = document.querySelector('.animals').textContent;
const lastStrong = document.querySelector('.animals').innerHTML;

document.body.querySelectorAll('p').forEach(el => {
  el.textContent = last;
});

document.body.querySelectorAll('p').forEach(el => {
  el.innerHTML = lastStrong;
});
