'use strict';

const mapWith = (array, callback) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
};

const addOne = number => {
  return number + 1;
};

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = string => {
  let tempArray = string.split('');
  return tempArray
    .filter(function(element, index) {
      return index % 2 === 0;
    })
    .join('');
};

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
