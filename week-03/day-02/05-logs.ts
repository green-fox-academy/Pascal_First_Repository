'use strict';
export = {};

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns the GET / POST request ratio.

declare function require(path: string): any;
const fs = require('fs');

let tempString: string = fs.readFileSync('log.txt');
let logArray: string[] = tempString.split('\n');

// Write a function that returns an array with the unique IP adresses.


