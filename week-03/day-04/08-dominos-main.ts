"use strict";

import { Domino } from "./08-dominos";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function(value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

//print(dominoes);

function sort(dominoes: Domino[]) {
  let sortedArray: Domino[] = [];
  sortedArray[0] = dominoes[0];
  for (let i = 0; i < dominoes.length - 1; i++) {
    for (let j = 0; j < dominoes.length; j++) {
      if (sortedArray[i].values[1] == dominoes[j].values[0]) {
        sortedArray[i + 1] = dominoes[j];
      }
    }
  }
  return sortedArray;
}

//toString(): string {
//  return this.things
//    .map(function(thing: Thing) {
//      return thing.toString();
//    })
//    .join("\n");
//}

sort(dominoes).forEach(function(value) {
  console.log(value.values);
});
