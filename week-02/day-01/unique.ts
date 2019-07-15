"use strict";

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

//  Example
let arr: number[] = [1, 11, 34, 11, 52, 61, 1, 34];
//  should print: `[1, 11, 34, 52, 61]`

let unique = arr.filter(function(elem, index, self) {
  return index === self.indexOf(elem);
});

console.log(unique);
