/* You can work in the html or in a separate js file. Like:
    <script>
      Add an item that says 'The Green Fox' to the asteroid list.
      Add an item that says 'The Lamplighter' to the asteroid list.
      Add a heading saying 'I can add elements to the DOM!' to the .container.
      Add an image, any image, to the container.
    </script>
    OR */

const asteroidList = document.querySelector('ul.asteroids');
const newAsteroid = document.createElement('li');
const newAsteroid2 = document.createElement('li');

newAsteroid.id = 'b555';
newAsteroid.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid);

newAsteroid2.id = 'b666';
newAsteroid2.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroid2);

const headingList = document.querySelector('.container');
const newHeading = document.createElement('h1');

newHeading.id = 'h001';
newHeading.textContent = 'I can add elements to the DOM!';
headingList.appendChild(newHeading);

const gifLink =
  'https://media3.giphy.com/media/elKDA2lfOXixJG68cJ/200w.webp?cid=790b76115d498eaa4b4c52707348f9eb&rid=200w.webp';

const newImg = document.createElement('img');

newImg.src = gifLink;
headingList.appendChild(newImg);
