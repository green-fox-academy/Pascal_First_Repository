'use strict';

function parsedPromised() {
  let promise = new Promise((fulfill, reject) => {
    try {
      fulfill(JSON.parse(process.argv[2]));
    } catch (e) {
      reject(e.message);
    }
  });
  return promise;
}

parsedPromised().then(null, console.log);
