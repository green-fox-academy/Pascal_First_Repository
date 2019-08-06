/* You can work in the html or in a separate js file. Like:
    <script>
      If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
      If the first p has an 'apple' class, replace cat's content with 'dog'
      Make apple red by adding a .red class
      Make balloon less balloon-like (change its shape)
    </script>
    OR */

if (document.querySelectorAll('p')[3].className === 'dolphin') {
  document.body.querySelectorAll('.apple')[0].textContent = 'pear';
}

if (document.querySelectorAll('p')[0].className === 'apple') {
  document.body.getElementsByClassName('cat')[0].textContent = 'dog';
}

document.querySelector('.apple').classList.add('red');

document.querySelector('.balloon').style.borderRadius = '5%';
