'use strict';

const newPromise = new Promise(function(resolve, reject) {
  resolve('PROMISE VALUE');
});

newPromise.then(function(result) {
  console.log(result);
});

console.log('MAIN PROGRAM');
