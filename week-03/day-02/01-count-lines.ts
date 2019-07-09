// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');
let filename = '01-count-lines.ts'
try {
    let fileContent = fs.readFileSync(filename, 'utf-8');
    let lines: string[] = fileContent.split('\n');
    console.log(lines.length);
}
catch (e) {
    console.log('0');
}