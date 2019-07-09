'use strict';

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

export = {};
declare function require(path: string): any;

const fs = require('fs');
let filename: string = 'my-file.txt';
let myName: string = '\n' + 'Pascal Dawson';

//Option A

try {
    let fileContent = fs.readFileSync(filename, 'utf-8');
    fs.appendFileSync(filename, myName);
    console.log(fileContent);
}
catch (e) {
    console.error(`Unable to write file: ${filename}`);
}

