'use strict';

function filterMatrix(array: number[][]): number[] {
  let tempArray: any[] = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      tempArray.push(array[i][j]);
    }
  }
  return (tempArray = tempArray.filter(
    (item, index) => tempArray.indexOf(item) === index
  ));
}

import { test } from 'tape';

test(t => {
  let testMatrix = [[1, 1], [4, 2]];
  let testMatrix2 = [[4, 3, -1], [10, 2, 5], [-2, 3, 4]];
  t.equals(filterMatrix(testMatrix), [1, 4, 2]);
  t.equals(filterMatrix(testMatrix2), [4, 3, -1, 10, 2, 5, -2]);
  t.end();
});
