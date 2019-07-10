"use strict";
export = {};

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns the GET / POST request ratio.

declare function require(path: string): any;
const fs = require("fs");

//let tempString: string = fs.readFileSync('log.txt');
//let logArray: string[] = tempString.split('\n');

// Write a function that returns an array with the unique IP adresses.

function readLogFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName);
  } catch (error) {
    return "";
  }
}

let fileContent: string = readLogFile("log.text");

function createLineBasedOnTextContent(FileContent: string) {
  return fileContent.split("\n");
}
function getIPAddressOfLine(line: string) {
  return line.split("   ")[1];
}

//createLineBasedOnTextContent(fileContent)
//.forEach(function(line) {
//  console.log(getIPAddressOfLine(line));
//});

let IPAddresses: string[] = createLineBasedOnTextContent(fileContent).map(
  function(line) {
    return getIPAddressOfLine(line);
  }
);

let uniqueIPAddresses: string[] = [];

uniqueIPAddresses = IPAddresses.map(function(iPAddress: string) {
  if (uniqueIPAddresses.indexOf(iPAddress) <= -1) {
    return iPAddress;
  }
});

console.log(uniqueIPAddresses);
console.log();
