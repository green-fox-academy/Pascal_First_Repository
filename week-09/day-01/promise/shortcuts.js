'use strict';

let promiseOne = Promise.resolve('Ricsi fater');

promiseOne.catch(function(err) {
  console.error('THERE IS AN ERROR!!!');
  console.error(err.message);
});
