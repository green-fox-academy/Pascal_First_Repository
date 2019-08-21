'use strict';

export function checkForAnagram(stringOne: string, stringTwo: string): boolean {
  let arrayOne: string = stringOne
    .toLowerCase()
    .split('')
    .sort()
    .toString();
  let arrayTwo: string = stringTwo
    .toLowerCase()
    .split('')
    .sort()
    .toString();

  return arrayOne === arrayTwo;
}
