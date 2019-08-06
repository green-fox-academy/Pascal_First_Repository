/*  You can work in the html or in a separate js file. Like:
<script>
  Write the image's url to the console.
  Replace the image with a picture of your favorite animal.
  Make the link point to the Green Fox Academy website.
  Disable the second button.
  Replace its text with 'Don't click me!'.
</script>
OR */

console.log(document.body.querySelector('img').getAttribute('src'));

let newlink =
  'https://www.georgiaaquarium.org/wp-content/uploads/2018/07/whale-1-1035x493.png';

document.body.querySelector('img').setAttribute('src', newlink);

let greenLink =
  'https://www.greenfoxacademy.com/junior-programozo-kepzes?gclid=CjwKCAjwyqTqBRAyEiwA8K_4O6QmKRX5G7YRv_D1v6DD5oxsEs6B126U9I9YSPh5QVh68zdFxd9aBRoCIhIQAvD_BwE';

document.body.querySelector('a').setAttribute('href', greenLink);

document.body
  .getElementsByClassName('this-one')[0]
  .setAttribute('disabled', true);

document.body.getElementsByClassName('this-one')[0].innerHTML =
  "Don't click me!";
