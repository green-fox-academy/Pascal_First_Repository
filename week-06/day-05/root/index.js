('use strict');

const arrayToUse = [
  {
    path: '1.jpg',
    title: 'Annecy',
    content:
      'Sometimes called "Venice of the Alps", this idyllic and touristic representation comes from the three canals and the Thiou river lying through the old city and whose initial role was to protect the city and to empower its handicrafts. The city experienced an industrial development in the 19th century with silk manufacturing. Some of its industrial legacy remains today with the headquarters of NTN-SNR bearings, Salomon, Entremont and Dassault Aviation. '
  },
  {
    path: '2.jpg',
    title: 'string2',
    content: 'string2'
  },
  {
    path: '3.jpg',
    title: 'string3',
    content: 'string3'
  },
  {
    path: '4.jpg',
    title: 'strin4',
    content: 'string4'
  },
  {
    path: '5.jpg',
    title: 'string5',
    content: 'string5'
  },
  {
    path: '6.jpg',
    title: 'string6',
    content: 'string6'
  },
  {
    path: '7.jpg',
    title: 'string',
    content: 'string'
  },
  {
    path: '8.jpg',
    title: 'string',
    content: 'string'
  },
  {
    path: '9.jpg',
    title: 'string',
    content: 'string'
  },
  {
    path: '10.jpg',
    title: 'string',
    content: 'string'
  },
  {
    path: '11.jpg',
    title: 'string',
    content: 'string'
  },
  {
    path: '12.jpg',
    title: 'string',
    content: 'string'
  },
  {
    path: '13.jpg',
    title: 'string',
    content: 'string'
  }
];

const imgList = document.querySelector('.imgList');

document.querySelector('.navimg').setAttribute('src', `${arrayToUse[0].path}`);
document.querySelector('h2').textContent = `${arrayToUse[0].title}`;
document.querySelector('p').textContent = `${arrayToUse[0].content}`;

const navImgNumber = 5;
const thumbnailImgCount = 5;

for (let i = 0; i < thumbnailImgCount; i++) {
  let smallImg = document.createElement('img');
  smallImg.src = arrayToUse[i].path;
  smallImg.className = 'tiny';
  smallImg.addEventListener('click', function() {
    document
      .querySelector('.navimg')
      .setAttribute('src', `${arrayToUse[i].path}`);
    document.querySelector('h2').textContent = `${arrayToUse[i].title}`;
    document.querySelector('p').textContent = `${arrayToUse[i].content}`;
  });
  imgList.appendChild(smallImg);
}

function navigate(number) {
  let source = document.querySelector('.navimg').getAttribute('src');
  let index = arrayToUse.findIndex(x => x.path === source);
  if (number < 0 && index <= 1) {
    index = navImgNumber;
  } else if (number > 0 && index >= navImgNumber - 1) {
    index = -1;
  }
  document
    .querySelector('.navimg')
    .setAttribute('src', `${arrayToUse[index + number].path}`);
  document.querySelector('h2').textContent = `${
    arrayToUse[index + number].title
  }`;
  document.querySelector('p').textContent = `${
    arrayToUse[index + number].content
  }`;
}

/* setTimeout(thumbnailcreator, 0);

function modifier(num) {
  if (num === 1) {
    thumbnailModifier++;
    setTimeout(thumbnailCleaner, 0);
    setTimeout(thumbnailcreator, 0);
  } else if (num === -1) {
    thumbnailModifier--;
    setTimeout(thumbnailCleaner, 0);
    setTimeout(thumbnailcreator, 0);
  }
}

function thumbnailCleaner() {
  let smallImg = document.getElementsByClassName('.tiny');
  while (smallImg.firstChild) {
    smallImg.removeChild(smallImg.firstChild);
  }
} */
