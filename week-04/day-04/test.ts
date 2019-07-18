"use strict";

import { test } from "tape";
import { addNum as t, subtractNum, addNum } from "./addNums";
import { NumberOperations } from "./classtesting";

//test(t => {
//  t.equals(1, 1);
//  t.end();
//});

//test(t => {
//  const actual = addNum(3, 4);
//  const expected = 7;
//
//  t.equals(actual, expected);
//  t.end();
//});

//test(t => {
//  t.equals(subtractNum(7, 3), 4);
//  t.end();
//});

test(t => {
  const operations = new NumberOperations();

  var actual = operations.addNum(1, 2);
  var expected = 3;

  t.equal(actual, expected);
  t.end();
});

test(t => {
  const operations = new NumberOperations();

  t.equal(operations.subtractNum(2, 1), 1);
  t.end();
});
