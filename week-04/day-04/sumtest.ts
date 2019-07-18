"use strict";

import { test } from "tape";
import { Sum } from "./sum";

test(t => {
  let testArray = [1, 2, 3, 4, 5, 6];
  let testSum: Sum = new Sum(testArray);

  t.equals(testSum.sumAll(), 21);
  t.end();
});
