'use strict';

export = {};
declare function require(path: string): any;
const fs = require('fs');

let marvel: string = 'marvel.csv';
let fileToRead1: string = fs.readFileSync(marvel, 'utf-8');
let paramount: string = 'paramount.csv';
let fileToRead2: string = fs.readFileSync(paramount, 'utf-8');

let filter: RegExp = new RegExp(/\d\d\d\d/)
let countingObject = {};

try {
  let tempArray: string[] = fileToRead1.split('');
  for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i].search(filter)) {
        countingObject[i] = 1
      }
      
  }
  console.log(tempArray);
} catch (e) {
  console.error(`Cannot find studio ${marvel}, please try again later.`);
}



countingObject[1991] = 1;

if (countingObject[]) {
  console.log('bennevan');
} else {
  console.log('nincsbenne');
}
