"use strict";

export function checkForAnagram(word1: string, word2: string): boolean {
  let sorted1 = word1
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let sorted2 = word2
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  return sorted1 == sorted2;
}

console.log(checkForAnagram("alma", "amla"));
