"use strict";

import { test } from "tape";
import { Sum } from "./sum";

test(t => {
  let testArray = [5];
  let testSum: Sum = new Sum(testArray);

  t.equals(testSum.sumAll(), 5);
  t.end();
});
