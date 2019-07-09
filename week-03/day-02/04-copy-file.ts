'use strict';
export = {};

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

declare function require(path: string): any;

const fs = require('fs');
let filename: string = 'my-file.txt';
let newFile: string = 'my-new-file.txt';

//Option A:

function fuckLoops(fileName, newFile) {
    fs.copyFile(filename, newFile, (err) => {
        if (err) return false;
    });
    return true
}

console.log(fuckLoops(filename, newFile))

// Option B:

function fuckLoops2(fileName, newFile) {
    try {
        fs.copyFileSync(filename, newFile)
        return true;
    }
    catch (e) {
        return false;
    }
}

console.log(fuckLoops2(filename, newFile));