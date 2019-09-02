'use strict';

function attachTitle(string) {
  return `DR. ${string}`;
}

let promise = new Promise(function(fulfill, reject) {
  fulfill('MANHATTAN');
});

promise.then(attachTitle).then(console.log);
