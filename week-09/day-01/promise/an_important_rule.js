'use strict';

function alwaysThrows() {
  throw console.error('OH NOES');
}

function iterate(number) {
  return number + 1;
}

const newPromise = Promise.resolve(iterate(0));

newPromise.then(function(value) {
  console.log(iterate(value));
  console.log(iterate(value));
  console.log(iterate(value));
  console.log(iterate(value));
  console.log(iterate(value));
});
