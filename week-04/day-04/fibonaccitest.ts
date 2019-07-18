"use strict";

import { test } from "tape";
import { fibo } from "./fibonacci";

test(t => {
  t.equals(fibo(10), 34);
  //t.equals(fibo(100), 218922995834555169026);
  t.equals(fibo(5), 3);
  t.equals(fibo(36), 9227465);
  t.equals(fibo(-5), "You suck balls!");
  t.end();
});
